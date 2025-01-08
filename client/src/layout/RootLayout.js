import { Outlet } from 'react-router-dom';
import Header from '../components/views/Header/Header';
import Footer from '../components/views/Footer/Footer';
import styles from './RootLayout.module.scss';

const RootLayout = () => (
  <div className={styles.root}>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default RootLayout;