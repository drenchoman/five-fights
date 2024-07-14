import Image from 'next/image';
import styles from './page.module.css';
import Header from './components/header';
import Form from './components/form';
import Fights from './components/fights';
import Faq from './components/faq';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Form />
      <Fights />
      <Faq />
      <Footer />
    </main>
  );
}
