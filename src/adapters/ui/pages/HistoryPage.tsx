import { useState, useEffect } from 'react';
import type { Attempt } from '../../../domain/models/Attempt';
import type { AttemptRepository } from '../../../domain/ports/AttemptRepository';
import type { ExamRepository } from '../../../domain/ports/ExamRepository';

interface Props {
  examIndex: number;
  examRepo: ExamRepository;
  attemptRepo: AttemptRepository;
  onBack: () => void;
  onStartExam: (index: number) => void;
}

export function HistoryPage({ examIndex, examRepo, attemptRepo, onBack, onStartExam }: Props) {
  const exam = examRepo.getByIndex(examIndex);
  const [attempts, setAttempts] = useState<Attempt[]>([]);

  useEffect(() => {
    attemptRepo.getByExam(examIndex).then(setAttempts);
  }, [attemptRepo, examIndex]);

  const fmtTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}m ${sec}s`;
  };

  const fmtDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString('en-GB', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  };

  if (!exam) return null;

  return (
    <div>
      <button
        onClick={onBack}
        style={{
          background: 'transparent', color: '#888', border: 'none',
          cursor: 'pointer', fontSize: 12, marginBottom: 16, padding: 0,
          fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace",
        }}
      >
        &larr; Back to exams
      </button>

      <div style={{
        fontSize: 11, letterSpacing: 4, textTransform: 'uppercase',
        color: '#888', marginBottom: 8,
      }}>
        Attempt History
      </div>
      <h2 style={{
        fontSize: 20, fontWeight: 700, fontFamily: 'Georgia,serif',
        margin: '0 0 24px 0',
      }}>
        {exam.title}
      </h2>

      {attempts.length === 0 ? (
        <div style={{ color: '#555', fontSize: 13 }}>No attempts yet.</div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {attempts.map((a, i) => (
            <div
              key={a.id ?? i}
              style={{
                border: '1px solid #222', borderRadius: 8,
                padding: '16px 20px', background: '#111118',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}
            >
              <div>
                <div style={{ fontSize: 13, color: '#ccc' }}>
                  {fmtDate(a.completedAt)}
                </div>
                <div style={{ fontSize: 11, color: '#666', marginTop: 4 }}>
                  {a.score}/{a.total} &middot; {fmtTime(a.timeSpent)}
                  {a.flagged.length > 0 && ` \u00B7 ${a.flagged.length} flagged`}
                </div>
              </div>
              <div style={{
                fontSize: 20, fontWeight: 700, fontFamily: 'Georgia,serif',
                color: a.passed ? '#4a6' : '#c44',
              }}>
                {a.percentage}%
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={() => onStartExam(examIndex)}
        style={{
          marginTop: 24, padding: '10px 20px',
          background: '#1a2e1a', color: '#4a6',
          border: '1px solid #2a4a2a', borderRadius: 6,
          cursor: 'pointer', fontSize: 13,
          fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace",
        }}
      >
        Start New Attempt
      </button>
    </div>
  );
}
