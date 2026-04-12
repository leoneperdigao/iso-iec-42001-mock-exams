import type { Exam } from '../models/Exam';

export interface ExamRepository {
  getAll(): Exam[];
  getByIndex(index: number): Exam | undefined;
  count(): number;
}
