export interface Attempt {
  id?: number;
  examIndex: number;
  examTitle: string;
  answers: Record<number, number>;
  flagged: number[];
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  timeSpent: number;
  completedAt: string;
}

export function createAttempt(
  examIndex: number,
  examTitle: string,
  answers: Record<number, number>,
  flagged: number[],
  total: number,
  score: number,
  timeSpent: number,
): Attempt {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  return {
    examIndex,
    examTitle,
    answers,
    flagged,
    score,
    total,
    percentage,
    passed: percentage >= 70,
    timeSpent,
    completedAt: new Date().toISOString(),
  };
}
