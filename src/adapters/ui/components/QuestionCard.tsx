import type { FlatQuestion } from '../../../domain/models/Exam';

interface Props {
  question: FlatQuestion;
  selectedAnswer?: number;
  reviewMode: boolean;
  onSelect: (optionIndex: number) => void;
}

export function QuestionCard({ question, selectedAnswer, reviewMode, onSelect }: Props) {
  return (
    <div>
      <div style={{
        fontSize: 15, fontWeight: 600, lineHeight: 1.6,
        marginBottom: 20, fontFamily: "Georgia,serif",
      }}>
        {question.question}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {question.options.map((opt, i) => {
          let bg = '#111118', border = '#222', color = '#ccc';
          if (reviewMode) {
            if (i === question.correct) { bg = '#1a2e1a'; border = '#2a4a2a'; color = '#4a6'; }
            else if (selectedAnswer === i) { bg = '#2e1a1a'; border = '#4a2a2a'; color = '#c44'; }
          } else if (selectedAnswer === i) {
            bg = '#161625'; border = '#4a6'; color = '#e0e0e6';
          }
          return (
            <div
              key={i}
              onClick={() => onSelect(i)}
              style={{
                padding: '12px 16px', background: bg,
                border: `1px solid ${border}`, borderRadius: 6,
                cursor: reviewMode ? 'default' : 'pointer',
                fontSize: 13, lineHeight: 1.6, color,
                transition: 'all 0.1s', display: 'flex', gap: 12,
              }}
            >
              <span style={{ color: '#555', flexShrink: 0 }}>{String.fromCharCode(65 + i)}.</span>
              <span>{opt}</span>
            </div>
          );
        })}
      </div>
      {reviewMode && (
        <div style={{
          marginTop: 16, padding: '16px 20px',
          background: '#0f1520', border: '1px solid #1a2a3a',
          borderRadius: 8, fontSize: 13, lineHeight: 1.7, color: '#8ab',
        }}>
          <span style={{
            fontSize: 10, letterSpacing: 2, textTransform: 'uppercase',
            color: '#567', display: 'block', marginBottom: 8,
          }}>
            Explanation
          </span>
          {question.explanation}
        </div>
      )}
    </div>
  );
}
