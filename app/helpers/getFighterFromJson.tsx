import fsPromises from 'fs/promises';
import path from 'path';
import { randomIntFromInterval } from './randomIntFromInterval';

export async function getFighterFromJson() {
  const filePath = path.join(process.cwd(), '/app/api/fighter.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  const randomNumber = randomIntFromInterval(0, objectData.length);
  let randomFighter = objectData[randomNumber]['Fighter'];
  return randomFighter;
}
