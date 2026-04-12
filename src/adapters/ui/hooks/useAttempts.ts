import { useState, useEffect, useCallback } from 'react';
import type { Attempt } from '../../../domain/models/Attempt';
import type { AttemptRepository } from '../../../domain/ports/AttemptRepository';

export function useAttempts(attemptRepo: AttemptRepository) {
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    const all = await attemptRepo.getAll();
    setAttempts(all);
    setLoading(false);
  }, [attemptRepo]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const getByExam = useCallback(async (examIndex: number) => {
    return attemptRepo.getByExam(examIndex);
  }, [attemptRepo]);

  const deleteAttempt = useCallback(async (id: number) => {
    await attemptRepo.delete(id);
    await refresh();
  }, [attemptRepo, refresh]);

  return { attempts, loading, refresh, getByExam, deleteAttempt };
}
