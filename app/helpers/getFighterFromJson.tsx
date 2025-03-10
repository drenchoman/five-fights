import fsPromises from 'fs/promises';
import path from 'path';
import { randomIntFromInterval } from './randomIntFromInterval';

export async function getFighterFromJson() {
  const filePath = path.join(
    process.cwd(),
    '/app/json/fighterNew.json'
  );
  const jsonData = await fsPromises.readFile(filePath, 'utf-8');
  const objectData = JSON.parse(jsonData);
  const randomNumber = randomIntFromInterval(0, objectData.length);
  let firstName = objectData[randomNumber]['FirstName'];
  let lastName = objectData[randomNumber]['LastName'];
  let fullName = `${firstName} ${lastName}`;
  let nation = objectData[randomNumber]['Nationality'];
  let randomFighter = { firstName, lastName, fullName, nation };
  return randomFighter;
}
