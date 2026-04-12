import { openDB, type IDBPDatabase } from 'idb';
import type { Attempt } from '../../domain/models/Attempt';
import type { AttemptRepository } from '../../domain/ports/AttemptRepository';

const DB_NAME = 'iso42001-exams';
const DB_VERSION = 1;
const STORE_NAME = 'attempts';

function getDB(): Promise<IDBPDatabase> {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
        store.createIndex('examIndex', 'examIndex', { unique: false });
        store.createIndex('completedAt', 'completedAt', { unique: false });
      }
    },
  });
}

export class IndexedDBAttemptRepository implements AttemptRepository {
  async save(attempt: Attempt): Promise<number> {
    const db = await getDB();
    const id = await db.add(STORE_NAME, attempt);
    return id as number;
  }

  async getByExam(examIndex: number): Promise<Attempt[]> {
    const db = await getDB();
    const all = await db.getAllFromIndex(STORE_NAME, 'examIndex', examIndex);
    return (all as Attempt[]).sort((a, b) =>
      new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
    );
  }

  async getAll(): Promise<Attempt[]> {
    const db = await getDB();
    const all = await db.getAll(STORE_NAME);
    return (all as Attempt[]).sort((a, b) =>
      new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
    );
  }

  async delete(id: number): Promise<void> {
    const db = await getDB();
    await db.delete(STORE_NAME, id);
  }

  async clear(): Promise<void> {
    const db = await getDB();
    await db.clear(STORE_NAME);
  }
}
