interface Props {
  scenario: string;
  isFirst: boolean;
  show: boolean;
  onToggle: () => void;
}

export function ScenarioBlock({ scenario, isFirst, show, onToggle }: Props) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div
        onClick={onToggle}
        style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: '#111118', border: '1px solid #222',
          borderRadius: show ? '8px 8px 0 0' : 8,
          padding: '10px 16px', cursor: 'pointer',
          fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#666',
        }}
      >
        <span>Scenario {isFirst ? '' : '(same as previous)'}</span>
        <span>{show ? '\u25B2' : '\u25BC'}</span>
      </div>
      {show && (
        <div style={{
          background: '#111118', border: '1px solid #222', borderTop: 'none',
          borderRadius: '0 0 8px 8px', padding: '12px 16px',
          fontSize: 13, lineHeight: 1.7, color: '#bbb',
        }}>
          {scenario}
        </div>
      )}
    </div>
  );
}
