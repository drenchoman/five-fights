import Fights from './components/fights/fights';
import { randomIntFromInterval } from './helpers/randomIntFromInterval';
import { getFighterFromJson } from './helpers/getFighterFromJson';
import { getAllFightersFromJson } from './helpers/getAllFightersFromJson';
import sampleRespone from './json/sampleresponse.json';
async function getFighterData() {
  const fighter = await getFighterFromJson();
  const res = await fetch(
    `https://${process.env.RAPID_API_HOST}/fighters/fight_history?first_name=${fighter.firstName}&last_name=${fighter.lastName}`,
    {
      next: { revalidate: 43200 },
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-key': process.env.RAPID_API_KEY
          ? process.env.RAPID_API_KEY
          : '',
        'x-rapidapi-host': process.env.RAPID_API_HOST
          ? process.env.RAPID_API_HOST
          : '',
      },
    }
  );

  if (!res.ok) {
    console.log(res);
    throw new Error('Failed to fetch data. Try again later.');
  }

  const data = await res.json();
  const fights = filterFights(data);

  return { fights, fighter };
}

function filterFights(data: any) {
  let max = data.length - 5;
  let randomNumber = randomIntFromInterval(0, max);

  let fivefights = data
    .slice(randomNumber, randomNumber + 5)
    .map((f: any) => ({
      date: f.date,
      opponent: f.opponent,
      result: f.result,
      method: f.method,
      event: f.event,
    }))
    .reverse();

  return fivefights;
}

export default async function Home() {
  // Restore for full function
  // const { fights, fighter } = await getFighterData();
  const allFighters = await getAllFightersFromJson();

  const fights = filterFights(sampleRespone);
  const fighter = {
    firstName: 'Conor',
    lastName: 'Mcgregor',
    nation: 'Ireland',
    fullName: 'Conor Mcgregor',
  };

  return (
    <Fights
      fightInfo={fights}
      fighterName={fighter.fullName}
      fighterNation={fighter.nation}
      allFighters={allFighters}
    />
  );
}
