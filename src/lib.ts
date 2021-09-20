import { LevelDownIteratorOptions } from 'leveldown';
import { LevelUp } from 'levelup';

export async function iterate(db: LevelUp, opts?: LevelDownIteratorOptions) {
  return new Promise<void>((resolve, reject) => {
    db.createReadStream(opts)
      .on('data', function (data: { key: Buffer, value: Buffer }) {
        console.log(data.key.toString())
      })
      .on('error', function (err) {
        reject(err)
      })
      .on('close', function () {
        resolve()
      })
      .on('end', function () {})
  })
}
