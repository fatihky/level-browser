#!/usr/bin/env node
import LevelDOWN from 'leveldown';
import LevelUp from 'levelup';
import { keysCmd } from './commands';

async function main() {
  const argv = require('minimist')(process.argv.slice(2));
  const dbpath = argv.dbpath || '.'
  const db = LevelUp(LevelDOWN(dbpath))
  const [ command ] = argv._

  if (!command) {
    throw new Error('No command provided')
  }
 
  switch (command) {
    case 'keys': {
      await keysCmd(db);
      break
    }

    default:
      throw new Error(`Unknown command: ${command}`)
  }

  await db.close()
}

main().catch(err => {
  console.log('Error:', err)

  process.exit(1);
});
