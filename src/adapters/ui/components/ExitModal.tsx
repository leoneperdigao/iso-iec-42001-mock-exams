interface Props {
  answered: number;
  total: number;
  onSubmitAndExit: () => void;
  onSaveProgress: () => void;
  onCancel: () => void;
}

const btnBase: React.CSSProperties = {
  padding: '10px 20px', border: '1px solid #333', borderRadius: 6,
  cursor: 'pointer', fontSize: 13, width: '100%',
  fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace",
};

export function ExitModal({ answered, total, onSubmitAndExit, onSaveProgress, onCancel }: Props) {
  return (
    <div
      onClick={onCancel}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 1000, padding: 16,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#111118', border: '1px solid #333', borderRadius: 12,
          padding: '28px 32px', maxWidth: 420, width: '100%',
        }}
      >
        <div style={{
          fontSize: 16, fontWeight: 700, fontFamily: 'Georgia,serif',
          marginBottom: 8,
        }}>
          Leave exam?
        </div>
        <div style={{ fontSize: 13, color: '#999', lineHeight: 1.6, marginBottom: 24 }}>
          You have answered {answered} of {total} questions.
          {answered < total && ` ${total - answered} questions are unanswered.`}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button
            onClick={onSubmitAndExit}
            style={{
              ...btnBase,
              background: '#2e1a1a', color: '#c44', borderColor: '#4a2a2a',
            }}
          >
            Submit &amp; Exit
          </button>
          <button
            onClick={onSaveProgress}
            style={{
              ...btnBase,
              background: '#1a2a1a', color: '#4a6', borderColor: '#2a4a2a',
            }}
          >
            Save Progress &amp; Exit
          </button>
          <button
            onClick={onCancel}
            style={{
              ...btnBase,
              background: 'transparent', color: '#888',
            }}
          >
            Continue Exam
          </button>
        </div>
      </div>
    </div>
  );
}
