import Fights from './components/fights';
import ErrorPage from './error';
import { randomIntFromInterval } from './helpers/randomIntFromInterval';
import { getFighterFromJson } from './helpers/getFighterFromJson';

async function getFighterData() {
  const fighter = await getFighterFromJson();
  const res = await fetch(
    `https://ufc-d1.p.rapidapi.com/Events/FindEventsByFighterName/${fighter}?limit=30`,
    {
      next: { revalidate: 86400 },
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
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  const fightInfo = filterFights(data, fighter);

  return { fightInfo, fighter };
}

function filterFights(data: any, fighter: string) {
  let max = data.length - 5;
  let randomNumber = randomIntFromInterval(0, max);

  let fivefights = data
    .slice(randomNumber, randomNumber + 5)
    .map((f: any) => ({
      fighter: fighter,
      date: f.Date,
      fighterOne: f['Fighter 1'],
      fighterTwo: f['Fighter 2'],
      winner: f.Winner,
      weightClass: f['Weight_Class'],
    }))
    .reverse();

  return fivefights;
}

export default async function Home() {
  const { fightInfo, fighter } = await getFighterData();

  return <Fights fightInfo={fightInfo} fighter={fighter} />;
}
