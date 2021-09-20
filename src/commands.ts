import { LevelUp } from 'levelup';
import { iterate } from './lib';

export async function keysCmd(db: LevelUp) {
  return await iterate(db)
}
