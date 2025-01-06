import ProductSummary from '../../common/ProductSummary/ProductSummary';
import styles from './CategoryPage.module.scss';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';

const CategoryPage = () => {
  const { category } = useParams();

  const categoryProducts = useSelector((state) =>
    getProductsByCategory(state, category),
  );

  return (
    <div className={styles.showcase}>
      {categoryProducts.map(({ id, main_img, name, price }) => (
        <ProductSummary key={id} img={main_img} name={name} price={price} />
      ))}
    </div>
  );
};

export default CategoryPage;