import RedirectBox from '../../common/RedirectBox/RedirectBox';
import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/productsRedux';

const Home = () => {
  const categories = useSelector(getAllCategories);

  return (
    <section className={styles.home}>
      <div className={styles.home__elements}>
        <RedirectBox category="all" text="wszystkie" img="all.jpg" />
        {categories.map(({ name, text, img }) => (
          <RedirectBox key={name} category={name} text={text} img={img} />
        ))}
      </div>
    </section>
  );
};

export default Home;