import type { Exam } from '../../../domain/models/Exam';
import { flattenExam } from '../../../domain/models/Exam';
import type { Attempt } from '../../../domain/models/Attempt';

interface Props {
  exam: Exam;
  index: number;
  attempts: Attempt[];
  timerMinutes: number;
  hasSavedProgress: boolean;
  onStart: (index: number) => void;
  onResume: (index: number) => void;
  onDiscardProgress: (index: number) => void;
  onHistory: (index: number) => void;
}

export function ExamCard({ exam, index, attempts, timerMinutes, hasSavedProgress, onStart, onResume, onDiscardProgress, onHistory }: Props) {
  const qCount = flattenExam(exam).length;
  const scenarioCount = exam.sections.filter(s => s.type === 'scenario').length;
  const bestAttempt = attempts.length > 0
    ? attempts.reduce((best, a) => a.percentage > best.percentage ? a : best, attempts[0])
    : null;

  return (
    <div
      style={{
        border: '1px solid #222', borderRadius: 8,
        padding: '20px 24px', marginBottom: 12,
        background: '#111118', transition: 'all 0.15s',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 600, fontFamily: 'Georgia,serif' }}>{exam.title}</div>
          <div style={{ fontSize: 12, color: '#888', marginTop: 4 }}>{exam.subtitle}</div>
          <div style={{ fontSize: 11, color: '#666', marginTop: 8 }}>
            {qCount} questions &middot; {scenarioCount} scenarios &middot; {timerMinutes} min
          </div>
        </div>
        {bestAttempt && (
          <div style={{ textAlign: 'right' }}>
            <div style={{
              fontSize: 18, fontWeight: 700, fontFamily: 'Georgia,serif',
              color: bestAttempt.passed ? '#4a6' : '#c44',
            }}>
              {bestAttempt.percentage}%
            </div>
            <div style={{ fontSize: 10, color: '#666' }}>best of {attempts.length}</div>
          </div>
        )}
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
        {hasSavedProgress && (
          <>
            <button
              onClick={() => onResume(index)}
              style={{
                padding: '8px 16px', background: '#1a1a2e', color: '#68f',
                border: '1px solid #2a2a4a', borderRadius: 6, cursor: 'pointer', fontSize: 12,
                fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace",
              }}
            >
              Resume
            </button>
            <button
              onClick={() => {
                if (confirm(`Discard saved progress for ${exam.title}?`)) {
                  onDiscardProgress(index);
                }
              }}
              title="Discard saved progress"
              style={{
                padding: '8px 12px', background: 'transparent', color: '#844',
                border: '1px solid #422', borderRadius: 6, cursor: 'pointer', fontSize: 12,
                fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace",
              }}
            >
              Discard
            </button>
          </>
        )}
        <button
          onClick={() => onStart(index)}
          style={{
            padding: '8px 16px', background: '#1a2e1a', color: '#4a6',
            border: '1px solid #2a4a2a', borderRadius: 6, cursor: 'pointer', fontSize: 12,
            fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace",
          }}
        >
          {hasSavedProgress ? 'New Exam' : 'Start Exam'}
        </button>
        {attempts.length > 0 && (
          <button
            onClick={() => onHistory(index)}
            style={{
              padding: '8px 16px', background: 'transparent', color: '#888',
              border: '1px solid #222', borderRadius: 6, cursor: 'pointer', fontSize: 12,
              fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace",
            }}
          >
            History ({attempts.length})
          </button>
        )}
      </div>
    </div>
  );
}
