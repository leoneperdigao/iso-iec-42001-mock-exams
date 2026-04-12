export interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface ScenarioSection {
  type: 'scenario';
  scenario: string;
  questions: Question[];
}

export interface StandaloneSection {
  type: 'standalone';
  questions: Question[];
}

export type ExamSection = ScenarioSection | StandaloneSection;

export interface Exam {
  title: string;
  subtitle: string;
  sections: ExamSection[];
}

export interface FlatQuestion extends Question {
  scenario?: string;
  isScenario: boolean;
  originalCorrect: number; // tracks correct answer after shuffle
}

export function flattenExam(exam: Exam): FlatQuestion[] {
  const items: FlatQuestion[] = [];
  for (const section of exam.sections) {
    if (section.type === 'scenario') {
      for (const q of section.questions) {
        items.push({ ...q, scenario: section.scenario, isScenario: true, originalCorrect: q.correct });
      }
    } else {
      for (const q of section.questions) {
        items.push({ ...q, isScenario: false, originalCorrect: q.correct });
      }
    }
  }
  return items;
}

export function shuffleOptions(questions: FlatQuestion[]): FlatQuestion[] {
  return questions.map(q => {
    const indices = q.options.map((_, i) => i);
    // Fisher-Yates shuffle
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const shuffledOptions = indices.map(i => q.options[i]);
    const newCorrect = indices.indexOf(q.correct);
    return {
      ...q,
      options: shuffledOptions,
      correct: newCorrect,
      originalCorrect: q.correct,
    };
  });
}
