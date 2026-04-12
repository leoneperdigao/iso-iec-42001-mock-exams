import type { Exam, FlatQuestion } from '../../../domain/models/Exam';

interface Props {
  exam: Exam;
  questions: FlatQuestion[];
  answers: Record<number, number>;
  score: number;
  total: number;
  pct: number;
  passed: boolean;
  onReview: () => void;
  onRetry: () => void;
  onHome: () => void;
  onNavigateToQuestion: (index: number) => void;
}

const btn: React.CSSProperties = {
  padding: '10px 20px', background: '#222', color: '#e0e0e6',
  border: '1px solid #333', borderRadius: 6, cursor: 'pointer', fontSize: 13,
  fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace",
};

export function ResultsPage({
  exam, questions, answers, score, total, pct, passed,
  onReview, onRetry, onHome, onNavigateToQuestion,
}: Props) {
  const flaggedCount = questions.filter((_, i) => answers[i] === undefined).length;

  return (
    <div>
      <div style={{
        fontSize: 11, letterSpacing: 4, textTransform: 'uppercase',
        color: '#888', marginBottom: 24,
      }}>
        Results &middot; {exam.title}
      </div>

      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <div style={{
          fontSize: 64, fontWeight: 700, fontFamily: 'Georgia,serif',
          color: passed ? '#4a6' : '#c44',
        }}>
          {pct}%
        </div>
        <div style={{ fontSize: 16, color: '#999', marginTop: 8 }}>
          {score} / {total} correct
        </div>
        <div style={{
          fontSize: 14, marginTop: 12,
          color: passed ? '#4a6' : '#c44', fontWeight: 600,
        }}>
          {passed ? 'PASS' : 'FAIL'} (70% required)
        </div>
        {flaggedCount > 0 && (
          <div style={{ fontSize: 12, color: '#aa4', marginTop: 8 }}>
            {flaggedCount} unanswered
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={onReview} style={btn}>Review Answers</button>
        <button onClick={onRetry} style={btn}>Retry</button>
        <button onClick={onHome} style={btn}>All Exams</button>
      </div>

      <div style={{
        marginTop: 32, display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)', gap: 6,
      }}>
        {questions.map((q, i) => {
          const correct = answers[i] === q.correct;
          const unanswered = answers[i] === undefined;
          return (
            <div
              key={i}
              onClick={() => onNavigateToQuestion(i)}
              style={{
                aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: 4, fontSize: 11, cursor: 'pointer',
                background: unanswered ? '#1a1a25' : correct ? '#1a2e1a' : '#2e1a1a',
                color: unanswered ? '#555' : correct ? '#4a6' : '#c44',
                border: `1px solid ${unanswered ? '#222' : correct ? '#2a4a2a' : '#4a2a2a'}`,
              }}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}
