import Image from 'next/image';
import styles from './page.module.css';
import Header from './components/header';
import Fights from './components/fights';
import Faq from './components/faq';
import Footer from './components/footer';
import { randomIntFromInterval } from './helpers/randomIntFromInterval';

import fsPromises from 'fs/promises';
import path from 'path';

async function getFighterData() {
  const fighter = await getFighterFromJson();
  const res = await fetch(
    `https://ufc-data1.p.rapidapi.com/Events/FindEventsByFighterName/${fighter}?limit=30`,
    {
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
  console.log(data);
  const filteredData = filterFights(data, fighter);
  return filteredData;
}

async function getFighterFromJson() {
  const filePath = path.join(process.cwd(), '/app/api/fighter.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  const randomNumber = randomIntFromInterval(0, objectData.length);
  let randomFighter = objectData[randomNumber]['Fighter'];
  return randomFighter;
}

function filterFights(data, fighter) {
  let max = data.length - 5;
  let randomNumber = randomIntFromInterval(0, max);

  let fivefights = data
    .slice(randomNumber, randomNumber + 5)
    .map((f) => ({
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
  // const fights = await getFighterData();

  return (
    <main className={styles.main}>
      <Header />
      {/* <Fights fightInfo={fights} /> */}
      <Faq />
      <Footer />
    </main>
  );
}
