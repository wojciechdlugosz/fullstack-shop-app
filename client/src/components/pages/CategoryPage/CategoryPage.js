import ProductSummary from '../../common/ProductSummary/ProductSummary';
import styles from './CategoryPage.module.scss';

const CategoryPage = () => {
  return (
    <div className={styles.showcase}>
      <ProductSummary />
    </div>
  );
};

export default CategoryPage;