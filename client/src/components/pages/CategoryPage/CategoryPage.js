import ProductSummary from '../../common/ProductSummary/ProductSummary';
import styles from './CategoryPage.module.scss';
import { useParams } from 'react-router-dom';
import {
  getProductsByCategory,
  getAllProducts,
  getAllCategories,
} from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';
import NotFound from '../../views/NotFound/NotFound';

const CategoryPage = () => {
  const { category } = useParams();
  const categories = useSelector(getAllCategories);
  const categoryProducts = useSelector((state) =>
    getProductsByCategory(state, category),
  );
  const allProducts = useSelector(getAllProducts);

  if (
    !categories.some((cat) => cat.name === category) &&
    !(category === 'all')
  ) {
    return <NotFound />;
  }

  return (
    <div className={styles.showcase}>
      {category === 'all'
        ? allProducts.map(({ id, main_img, name, price }) => (
            <ProductSummary key={id} img={main_img} name={name} price={price} />
          ))
        : categoryProducts.map(({ id, main_img, name, price }) => (
            <ProductSummary key={id} img={main_img} name={name} price={price} />
          ))}
    </div>
  );
};

export default CategoryPage;