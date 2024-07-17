import fsPromises from 'fs/promises';
import path from 'path';

export async function getAllFightersFromJson() {
  const filePath = path.join(process.cwd(), '/app/json/fighter.json');
  const jsonData = await fsPromises.readFile(filePath, 'utf-8');
  const objectData = JSON.parse(jsonData);
  const fighters = objectData.map(
    (fighter: any) => fighter['Fighter']
  );
  return fighters;
}
