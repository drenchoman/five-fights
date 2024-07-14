import fsPromises from 'fs/promises';
import path from 'path';
import styles from '../components/fights.module.css';

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
  return filterFights(objectData);
}

function filterFights(data) {
  // TO DO: Currently pulls lastest 5 fights, need to make RNG number function to select a random starting point

  let fivefights = data.slice(0, 5).map((f) => ({
    date: f.Date,
    competitior: f['Fighter 2'],
  }));
  return fivefights;
}

export default async function Fights() {
  const fights = await getLocalJson();
  console.log(fights);
  return (
    <div>
      <div>
        <h2>Fights</h2>
      </div>
      <div>
        {fights.map((f, i) => (
          <div className={styles.container} key={i}>
            <div>
              <p>{i}.</p>
              <span>{f.competitior}</span>
              <p>{f.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
