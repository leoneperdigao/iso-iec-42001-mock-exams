import type { Exam } from '../../domain/models/Exam';
import type { ExamRepository } from '../../domain/ports/ExamRepository';
import { EXAMS } from '../../data/exams';

export class StaticExamRepository implements ExamRepository {
  getAll(): Exam[] {
    return EXAMS;
  }

  getByIndex(index: number): Exam | undefined {
    return EXAMS[index];
  }

  count(): number {
    return EXAMS.length;
  }
}
