import { createRoot } from 'react-dom/client';
import { App } from './adapters/ui/App';
import { StaticExamRepository } from './adapters/persistence/StaticExamRepository';
import { IndexedDBAttemptRepository } from './adapters/persistence/IndexedDBAttemptRepository';

const examRepo = new StaticExamRepository();
const attemptRepo = new IndexedDBAttemptRepository();

createRoot(document.getElementById('root')!).render(
  <App examRepo={examRepo} attemptRepo={attemptRepo} />
);
