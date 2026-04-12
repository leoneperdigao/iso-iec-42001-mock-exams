import { useState, useEffect, useCallback, useRef } from 'react';
import type { FlatQuestion } from '../../../domain/models/Exam';
import { flattenExam, shuffleOptions } from '../../../domain/models/Exam';
import { createAttempt, type Attempt } from '../../../domain/models/Attempt';
import type { ExamRepository } from '../../../domain/ports/ExamRepository';
import type { AttemptRepository } from '../../../domain/ports/AttemptRepository';

const TIMER_MINUTES = 180;

export interface ExamState {
  currentQ: number;
  answers: Record<number, number>;
  flagged: Set<number>;
  timer: number;
  timerActive: boolean;
  showResults: boolean;
  reviewMode: boolean;
  showScenario: boolean;
  questions: FlatQuestion[];
}

export function useExam(
  examIndex: number,
  examRepo: ExamRepository,
  attemptRepo: AttemptRepository,
) {
  const exam = examRepo.getByIndex(examIndex);
  const [questions, setQuestions] = useState<FlatQuestion[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const [timer, setTimer] = useState(TIMER_MINUTES * 60);
  const [timerActive, setTimerActive] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [showScenario, setShowScenario] = useState(true);
  const startTimeRef = useRef(Date.now());

  const startExam = useCallback((resume = false) => {
    if (!exam) return;

    if (resume) {
      const saved = localStorage.getItem(`aims-progress-${examIndex}`);
      if (saved) {
        try {
          const p = JSON.parse(saved);
          setQuestions(p.questions);
          setCurrentQ(p.currentQ);
          setAnswers(p.answers);
          setFlagged(new Set(p.flagged));
          setTimer(p.timer);
          setTimerActive(true);
          setShowResults(false);
          setReviewMode(false);
          setShowScenario(true);
          startTimeRef.current = p.startTime;
          return;
        } catch { /* fall through to fresh start */ }
      }
    }

    localStorage.removeItem(`aims-progress-${examIndex}`);
    const flat = flattenExam(exam);
    const shuffled = shuffleOptions(flat);
    setQuestions(shuffled);
    setCurrentQ(0);
    setAnswers({});
    setFlagged(new Set());
    setTimer(TIMER_MINUTES * 60);
    setTimerActive(true);
    setShowResults(false);
    setReviewMode(false);
    setShowScenario(true);
    startTimeRef.current = Date.now();
  }, [exam, examIndex]);

  useEffect(() => {
    const hasSavedProgress = !!localStorage.getItem(`aims-progress-${examIndex}`);
    startExam(hasSavedProgress);
  }, [startExam, examIndex]);

  useEffect(() => {
    if (!timerActive || timer <= 0) return;
    const id = setInterval(() => {
      setTimer(t => {
        if (t <= 1) {
          setTimerActive(false);
          setShowResults(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [timerActive, timer]);

  const total = questions.length;
  const answered = Object.keys(answers).length;
  const score = questions.reduce((s, q, i) => s + (answers[i] === q.correct ? 1 : 0), 0);
  const pct = total ? Math.round((score / total) * 100) : 0;
  const passed = pct >= 70;

  const selectAnswer = (optionIndex: number) => {
    if (reviewMode) return;
    setAnswers(prev => ({ ...prev, [currentQ]: optionIndex }));
  };

  const toggleFlag = () => {
    setFlagged(prev => {
      const next = new Set(prev);
      if (next.has(currentQ)) next.delete(currentQ);
      else next.add(currentQ);
      return next;
    });
  };

  const goTo = (index: number) => {
    setCurrentQ(index);
    setShowScenario(true);
  };

  const goNext = () => {
    if (currentQ < total - 1) {
      setCurrentQ(currentQ + 1);
      setShowScenario(true);
    }
  };

  const goPrev = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
      setShowScenario(true);
    }
  };

  const submit = async (): Promise<Attempt | null> => {
    if (!exam) return null;
    setTimerActive(false);
    setShowResults(true);
    const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000);
    const attempt = createAttempt(examIndex, exam.title, answers, Array.from(flagged), total, score, timeSpent);
    await attemptRepo.save(attempt);
    return attempt;
  };

  const enterReview = () => {
    setReviewMode(true);
    setCurrentQ(0);
  };

  const exitReview = () => {
    setReviewMode(false);
    setShowResults(true);
  };

  const saveProgress = () => {
    const progress = {
      examIndex,
      questions,
      currentQ,
      answers,
      flagged: Array.from(flagged),
      timer,
      startTime: startTimeRef.current,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem(`aims-progress-${examIndex}`, JSON.stringify(progress));
  };

  const clearProgress = () => {
    localStorage.removeItem(`aims-progress-${examIndex}`);
  };

  return {
    exam,
    questions,
    currentQ,
    answers,
    flagged,
    timer,
    timerActive,
    showResults,
    reviewMode,
    showScenario,
    setShowScenario,
    total,
    answered,
    score,
    pct,
    passed,
    selectAnswer,
    toggleFlag,
    goTo,
    goNext,
    goPrev,
    submit,
    enterReview,
    exitReview,
    startExam,
    saveProgress,
    clearProgress,
  };
}
