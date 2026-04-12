import { useState } from 'react';
import type { ExamRepository } from '../../../domain/ports/ExamRepository';
import type { AttemptRepository } from '../../../domain/ports/AttemptRepository';
import { useExam } from '../hooks/useExam';
import { Timer } from '../components/Timer';
import { NavDots } from '../components/NavDots';
import { ScenarioBlock } from '../components/ScenarioBlock';
import { QuestionCard } from '../components/QuestionCard';
import { ExitModal } from '../components/ExitModal';
import { ResultsPage } from './ResultsPage';

interface Props {
  examIndex: number;
  examRepo: ExamRepository;
  attemptRepo: AttemptRepository;
  onHome: () => void;
}

const navBtn = (disabled: boolean): React.CSSProperties => ({
  padding: '8px 16px', background: 'transparent',
  color: disabled ? '#333' : '#888',
  border: '1px solid #222', borderRadius: 6,
  cursor: disabled ? 'default' : 'pointer', fontSize: 12,
  fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace",
});

export function ExamPage({ examIndex, examRepo, attemptRepo, onHome }: Props) {
  const state = useExam(examIndex, examRepo, attemptRepo);
  const {
    exam, questions, currentQ, answers, flagged,
    timer, timerActive, showResults, reviewMode, showScenario,
    setShowScenario, total, answered, score, pct, passed,
    selectAnswer, toggleFlag, goTo, goNext, goPrev,
    submit, enterReview, exitReview, startExam,
    saveProgress, clearProgress,
  } = state;

  const [showExitModal, setShowExitModal] = useState(false);

  if (!exam || questions.length === 0) return null;

  if (showResults && !reviewMode) {
    return (
      <ResultsPage
        exam={exam}
        questions={questions}
        answers={answers}
        score={score}
        total={total}
        pct={pct}
        passed={passed}
        onReview={enterReview}
        onRetry={() => startExam(false)}
        onHome={onHome}
        onNavigateToQuestion={(i) => { enterReview(); goTo(i); }}
      />
    );
  }

  const q = questions[currentQ];
  const isFirstInScenario = q.isScenario && (
    currentQ === 0 || questions[currentQ - 1]?.scenario !== q.scenario
  );

  const handleSubmitAndExit = async () => {
    clearProgress();
    await submit();
    onHome();
  };

  const handleSaveAndExit = () => {
    saveProgress();
    onHome();
  };

  return (
    <div>
      {showExitModal && (
        <ExitModal
          answered={answered}
          total={total}
          onSubmitAndExit={handleSubmitAndExit}
          onSaveProgress={handleSaveAndExit}
          onCancel={() => setShowExitModal(false)}
        />
      )}

      {/* Header */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: 16, borderBottom: '1px solid #222', paddingBottom: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {!reviewMode && (
            <button
              onClick={() => setShowExitModal(true)}
              style={{
                background: 'transparent', color: '#666', border: '1px solid #222',
                borderRadius: 6, cursor: 'pointer', fontSize: 11, padding: '4px 10px',
                fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace",
              }}
            >
              &larr; Exit
            </button>
          )}
          <span style={{ fontSize: 11, color: '#888' }}>
            {reviewMode ? 'REVIEW' : exam.title}
          </span>
          <span style={{ fontSize: 11, color: '#555' }}>
            Q{currentQ + 1}/{total}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {!reviewMode && <Timer seconds={timer} active={timerActive} />}
          {!reviewMode && (
            <span style={{ fontSize: 11, color: '#666' }}>{answered}/{total}</span>
          )}
        </div>
      </div>

      {/* Nav dots */}
      <NavDots
        questions={questions}
        currentQ={currentQ}
        answers={answers}
        flagged={flagged}
        reviewMode={reviewMode}
        onNavigate={goTo}
      />

      {/* Scenario */}
      {q.isScenario && q.scenario && (
        <ScenarioBlock
          scenario={q.scenario}
          isFirst={isFirstInScenario}
          show={showScenario}
          onToggle={() => setShowScenario(!showScenario)}
        />
      )}

      {/* Question */}
      <QuestionCard
        question={q}
        selectedAnswer={answers[currentQ]}
        reviewMode={reviewMode}
        onSelect={selectAnswer}
      />

      {/* Controls */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginTop: 24, paddingTop: 16, borderTop: '1px solid #222',
      }}>
        <button onClick={goPrev} disabled={currentQ === 0} style={navBtn(currentQ === 0)}>
          &larr; Prev
        </button>
        <div style={{ display: 'flex', gap: 8 }}>
          {!reviewMode && (
            <button
              onClick={toggleFlag}
              style={{
                padding: '8px 12px',
                background: flagged.has(currentQ) ? '#2a2a1a' : 'transparent',
                color: flagged.has(currentQ) ? '#aa4' : '#555',
                border: '1px solid #222', borderRadius: 6, cursor: 'pointer', fontSize: 11,
                fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace",
              }}
            >
              {flagged.has(currentQ) ? 'Flagged' : 'Flag'}
            </button>
          )}
          {!reviewMode && answered === total && (
            <button
              onClick={() => { clearProgress(); submit(); }}
              style={{
                padding: '8px 16px', background: '#1a2e1a', color: '#4a6',
                border: '1px solid #2a4a2a', borderRadius: 6, cursor: 'pointer', fontSize: 12,
                fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace",
              }}
            >
              Submit
            </button>
          )}
          {reviewMode && (
            <button
              onClick={exitReview}
              style={{
                padding: '8px 16px', background: '#222', color: '#888',
                border: '1px solid #333', borderRadius: 6, cursor: 'pointer', fontSize: 12,
                fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace",
              }}
            >
              Results
            </button>
          )}
        </div>
        <button onClick={goNext} disabled={currentQ === total - 1} style={navBtn(currentQ === total - 1)}>
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
