import { useState } from 'react';
import type { ExamRepository } from '../../domain/ports/ExamRepository';
import type { AttemptRepository } from '../../domain/ports/AttemptRepository';
import { HomePage } from './pages/HomePage';
import { ExamPage } from './pages/ExamPage';
import { HistoryPage } from './pages/HistoryPage';

type Screen =
  | { type: 'home' }
  | { type: 'exam'; examIndex: number }
  | { type: 'history'; examIndex: number };

interface Props {
  examRepo: ExamRepository;
  attemptRepo: AttemptRepository;
}

export function App({ examRepo, attemptRepo }: Props) {
  const [screen, setScreen] = useState<Screen>({ type: 'home' });
  const [key, setKey] = useState(0); // force re-mount on exam start

  const startExam = (index: number) => {
    localStorage.removeItem(`aims-progress-${index}`);
    setKey(k => k + 1);
    setScreen({ type: 'exam', examIndex: index });
  };

  const resumeExam = (index: number) => {
    setKey(k => k + 1);
    setScreen({ type: 'exam', examIndex: index });
  };

  return (
    <div style={{
      fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace",
      background: '#0a0a0f', color: '#e0e0e6',
      minHeight: '100vh', padding: '24px 16px',
    }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        {screen.type === 'home' && (
          <HomePage
            examRepo={examRepo}
            attemptRepo={attemptRepo}
            onStartExam={startExam}
            onResumeExam={resumeExam}
            onViewHistory={(i) => setScreen({ type: 'history', examIndex: i })}
          />
        )}
        {screen.type === 'exam' && (
          <ExamPage
            key={key}
            examIndex={screen.examIndex}
            examRepo={examRepo}
            attemptRepo={attemptRepo}
            onHome={() => setScreen({ type: 'home' })}
          />
        )}
        {screen.type === 'history' && (
          <HistoryPage
            examIndex={screen.examIndex}
            examRepo={examRepo}
            attemptRepo={attemptRepo}
            onBack={() => setScreen({ type: 'home' })}
            onStartExam={startExam}
          />
        )}
      </div>
    </div>
  );
}
