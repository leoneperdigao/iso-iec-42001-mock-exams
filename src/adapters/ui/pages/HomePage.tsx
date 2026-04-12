import { useState, useEffect } from 'react';
import type { ExamRepository } from '../../../domain/ports/ExamRepository';
import type { AttemptRepository } from '../../../domain/ports/AttemptRepository';
import type { Attempt } from '../../../domain/models/Attempt';
import { flattenExam } from '../../../domain/models/Exam';
import { ExamCard } from '../components/ExamCard';

interface Props {
  examRepo: ExamRepository;
  attemptRepo: AttemptRepository;
  onStartExam: (index: number) => void;
  onResumeExam: (index: number) => void;
  onViewHistory: (index: number) => void;
}

export function HomePage({ examRepo, attemptRepo, onStartExam, onResumeExam, onViewHistory }: Props) {
  const exams = examRepo.getAll();
  const [attemptsByExam, setAttemptsByExam] = useState<Record<number, Attempt[]>>({});

  useEffect(() => {
    (async () => {
      const map: Record<number, Attempt[]> = {};
      for (let i = 0; i < exams.length; i++) {
        map[i] = await attemptRepo.getByExam(i);
      }
      setAttemptsByExam(map);
    })();
  }, [attemptRepo, exams.length]);

  const totalQuestions = exams.reduce((sum, e) => sum + flattenExam(e).length, 0);

  return (
    <div>
      <div style={{ marginBottom: 48 }}>
        <div style={{
          fontSize: 11, letterSpacing: 4, textTransform: 'uppercase',
          color: '#888', marginBottom: 8,
        }}>
          PECB Certification Prep
        </div>
        <h1 style={{
          fontSize: 28, fontWeight: 700, margin: 0,
          lineHeight: 1.2, fontFamily: 'Georgia,serif',
        }}>
          ISO/IEC 42001<br />Lead Implementer
        </h1>
        <div style={{ fontSize: 13, color: '#999', marginTop: 12 }}>
          {exams.length} mock exams &middot; {totalQuestions} questions &middot; 3 options &middot; randomized each attempt
        </div>
      </div>

      {exams.map((exam, i) => (
        <ExamCard
          key={i}
          exam={exam}
          index={i}
          attempts={attemptsByExam[i] || []}
          timerMinutes={180}
          hasSavedProgress={!!localStorage.getItem(`aims-progress-${i}`)}
          onStart={onStartExam}
          onResume={onResumeExam}
          onHistory={onViewHistory}
        />
      ))}

      <div style={{ fontSize: 11, color: '#555', marginTop: 32, lineHeight: 1.7 }}>
        Mirrors real PECB exam: 80 questions, 3 hours, 3 options, 70% to pass. Domain-weighted: D1 Fundamentals 21%, D2 Requirements 6%, D3 Planning 25%, D4 Implementation 23%, D5 Monitoring 13%, D6 Improvement &amp; Audit 13%.<br />
        Scenario blocks of 5 questions (~60% scenario-based). Options randomized each attempt. History persists across sessions.<br />
        Real exam is open-book (ISO/IEC 42001 + notes).
      </div>
    </div>
  );
}
