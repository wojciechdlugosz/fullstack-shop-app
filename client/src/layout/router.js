import Home from '../components/views/Home/Home';
import CategoryPage from '../components/pages/CategoryPage/CategoryPage';
import ProductPage from '../components/pages/ProductPage/ProductPage';
import Cart from '../components/pages/Cart/Cart';
import OrderSummary from '../components/pages/OrderSummary/OrderSummary';
import About from '../components/pages/About/About';
import NotFound from '../components/views/NotFound/NotFound';
import RootLayout from './RootLayout';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="category/:name" element={<CategoryPage />} />
      <Route path="product/:id" element={<ProductPage />} />
      <Route path="cart" element={<Cart />} />
      <Route path="order" element={<OrderSummary />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);