import { RouterProvider } from 'react-router-dom';
import { router } from './layout/router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from './redux/productsRedux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
