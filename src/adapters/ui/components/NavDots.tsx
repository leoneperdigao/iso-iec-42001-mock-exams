import type { FlatQuestion } from '../../../domain/models/Exam';

interface Props {
  questions: FlatQuestion[];
  currentQ: number;
  answers: Record<number, number>;
  flagged: Set<number>;
  reviewMode: boolean;
  onNavigate: (index: number) => void;
}

export function NavDots({ questions, currentQ, answers, flagged, reviewMode, onNavigate }: Props) {
  return (
    <div style={{ display: 'flex', gap: 3, marginBottom: 16, flexWrap: 'wrap' }}>
      {questions.map((q, i) => {
        let bg = '#1a1a25', border = '#222';
        if (reviewMode) {
          const correct = answers[i] === q.correct;
          const unanswered = answers[i] === undefined;
          bg = unanswered ? '#1a1a25' : correct ? '#1a2e1a' : '#2e1a1a';
          border = unanswered ? '#333' : correct ? '#2a4a2a' : '#4a2a2a';
        } else {
          if (answers[i] !== undefined) { bg = '#1a2a1a'; border = '#2a4a2a'; }
          if (flagged.has(i)) { bg = '#2a2a1a'; border = '#4a4a2a'; }
        }
        if (i === currentQ) border = '#4a6';
        return (
          <div
            key={i}
            onClick={() => onNavigate(i)}
            style={{
              width: 14, height: 14, borderRadius: 3,
              background: bg, border: `1px solid ${border}`,
              cursor: 'pointer',
            }}
          />
        );
      })}
    </div>
  );
}
