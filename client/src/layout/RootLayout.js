import { Outlet } from 'react-router-dom';
import Header from '../components/views/Header/Header';
import Footer from '../components/views/Footer/Footer';

const RootLayout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default RootLayout;