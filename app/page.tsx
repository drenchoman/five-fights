import Fights from './components/fights';
import { randomIntFromInterval } from './helpers/randomIntFromInterval';
import { getFighterFromJson } from './helpers/getFighterFromJson';
import { getAllFightersFromJson } from './helpers/getAllFightersFromJson';
import Button from './components/button';
async function getFighterData() {
  const fighter = await getFighterFromJson();
  const res = await fetch(
    `poo`,
    // `https://${process.env.RAPID_API_HOST}/Events/FindEventsByFighterName/${fighter.fighter}?limit=30`,
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
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  const fightInfo = filterFights(data, fighter.fighter);

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
  // const { fightInfo, fighter } = await getFighterData();
  // const allFighters = await getAllFightersFromJson();

  return (
    <div>
      <Button />
      {/* <Fights
        fightInfo={fightInfo}
        fighterName={fighter.fighter}
        fighterNation={fighter.nation}
        allFighters={allFighters}
      /> */}
    </div>
  );
}
