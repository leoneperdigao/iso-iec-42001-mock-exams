import type { Attempt } from '../models/Attempt';

export interface AttemptRepository {
  save(attempt: Attempt): Promise<number>;
  getByExam(examIndex: number): Promise<Attempt[]>;
  getAll(): Promise<Attempt[]>;
  delete(id: number): Promise<void>;
  clear(): Promise<void>;
}
