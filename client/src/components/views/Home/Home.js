import RedirectBox from '../../common/RedirectBox/RedirectBox';
import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/productsRedux';

const Home = () => {
  const categories = useSelector(getAllCategories);

  return (
    <section className={styles.home}>
      <RedirectBox category="all" text="wszystkie" img="all.jpg" />
      {categories.map(({ name, text, img }) => (
        <RedirectBox key={name} category={name} text={text} img={img} />
      ))}
    </section>
  );
};

export default Home;