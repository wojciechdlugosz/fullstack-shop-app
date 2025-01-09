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

const CategoryPage = () => {
  const { category } = useParams();
  //console.log(category);
  const categories = useSelector(getAllCategories);
  //console.log(categories);
  const categoryProducts = useSelector((state) =>
    getProductsByCategory(state, category),
  );
  const allProducts = useSelector(getAllProducts);
  const requests = useSelector(getRequests);
  const request = requests['app/products/DATA_PRODUCTS'];

  if (
    !categories.some((cat) => cat.name === category) &&
    !(category === 'all')
  ) {
    return <NotFound />;
  }

  return (
    <section className={styles.showcase}>
                <h1>{}</h1>

      <aside className={styles.showcase__nav}>
        <SideNavigation />
      </aside>
      {request && request.pending && <Spinner />}
      {request && request.error && (
        <p>O nie, coś poszło nie tak :( Spróbuj później</p>
      )}
      {request && request.success && (
        <div className={styles.showcase__elements}>
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
      )}
    </section>
  );
};

export default CategoryPage;