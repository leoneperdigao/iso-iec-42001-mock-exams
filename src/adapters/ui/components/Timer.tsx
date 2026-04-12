interface Props {
  seconds: number;
  active: boolean;
}

export function Timer({ seconds, active }: Props) {
  const mm = Math.floor(seconds / 60).toString().padStart(2, '0');
  const ss = (seconds % 60).toString().padStart(2, '0');
  const urgent = seconds < 300;
  if (!active) return null;
  return (
    <span style={{
      fontSize: 13,
      color: urgent ? '#c44' : '#888',
      fontVariantNumeric: 'tabular-nums',
    }}>
      {mm}:{ss}
    </span>
  );
}
