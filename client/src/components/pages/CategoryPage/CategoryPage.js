import ProductSummary from '../../common/ProductSummary/ProductSummary';
import NotFound from '../../views/NotFound/NotFound';
import Spinner from '../../common/Spinner/Spinner';
import SideNavigation from '../../features/SideNavigation/SideNavigation';
import styles from './CategoryPage.module.scss';
import { useParams } from 'react-router-dom';
import {
  getProductsByCategory,
  getAllProducts,
  getAllCategories,
  getRequests,
} from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const CategoryPage = () => {
  const { category } = useParams();
  const categories = useSelector(getAllCategories);
  const categoryProducts = useSelector((state) =>
    getProductsByCategory(state, category),
  );
  const allProducts = useSelector(getAllProducts);
  const requests = useSelector(getRequests);
  const request = requests['app/products/DATA_PRODUCTS'];

  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    if (category === 'all') {
      setCategoryName('wszystkie produkty');
    } else {
      setCategoryName(categories.find((cat) => cat.name === category).text);
    }
  }, [category, categories]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  if (
    !categories.some((cat) => cat.name === category) &&
    !(category === 'all')
  ) {
    return <NotFound />;
  }

  return (
    <section className={styles.showcase}>
      <aside className={styles.showcase__nav}>
        <SideNavigation />
      </aside>
      {request && request.pending && <Spinner />}
      {request && request.error && (
        <p>O nie, coś poszło nie tak :( Spróbuj później</p>
      )}
      {request && request.success && (
        <div className={styles.showcase__products}>
          <h1 className={styles.showcase__products__title}>{categoryName}</h1>
          <div className={styles.showcase__products__elements}>
            {category === 'all'
              ? allProducts.map(({ id, main_img, name, price }) => (
                  <ProductSummary
                    key={id}
                    id={id}
                    img={main_img}
                    name={name}
                    price={price}
                  />
                ))
              : categoryProducts.map(({ id, main_img, name, price }) => (
                  <ProductSummary
                    key={id}
                    id={id}
                    img={main_img}
                    name={name}
                    price={price}
                  />
                ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default CategoryPage;