import RedirectBox from '../../common/RedirectBox/RedirectBox';
import styles from './Home.module.scss';

const Home = () => (
  <section className={styles.home}>
    <RedirectBox category="all" text="produkty" img="all.jpg" />
    <RedirectBox category="fasada" text="fasada" img="fasada.jpg" />
    <RedirectBox category="podloga" text="podłoga" img="podloga.jpg" />
    <RedirectBox category="fundament" text="fundament" img="fundament.jpg" />
  </section>
);

export default Home;