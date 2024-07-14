import Image from 'next/image';
import styles from './page.module.css';
import Header from './components/header';
import Fights from './components/fights';
import Faq from './components/faq';
import Footer from './components/footer';
import { randomIntFromInterval } from './helpers/randomIntFromInterval';

import fsPromises from 'fs/promises';
import path from 'path';

// TODO: Import data and display here
// Data below is an example of what would be returned from the API
// API is here https://rapidapi.com/dolphinnoirbusiness/api/ufc-data1"
// Can test how this would be displayed
async function getLocalJson() {
  const filePath = path.join(
    process.cwd(),
    '/app/api/fightdataexample.json'
  );
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  const filteredData = filterFights(objectData);
  return filteredData;
}

function filterFights(data) {
  let max = data.length - 5;
  let randomNumber = randomIntFromInterval(0, max);

  let fivefights = data
    .slice(randomNumber, randomNumber + 5)
    .map((f) => ({
      fighter: 'Jon Jones',
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
  const fights = await getLocalJson();

  return (
    <main className={styles.main}>
      <Header />
      <Fights fightInfo={fights} />
      <Faq />
      <Footer />
    </main>
  );
}
