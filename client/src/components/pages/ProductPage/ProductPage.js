import styles from './ProductPage.module.scss';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../../config';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../common/Spinner/Spinner';
import NotFound from '../../views/NotFound/NotFound';
import Button from '../../common/Button/Button';
import Counter from '../../common/Counter/Counter';
import Gallery from '../../features/Gallery/Gallery';
import SideCartSummary from '../../features/SideCartSummary/SideCartSummary';
import { getRequests } from '../../../redux/productsRedux';
import { BsBagPlusFill } from 'react-icons/bs';
import { getAllCartProducts } from '../../../redux/cartRedux';
import { addToCartFunction } from '../../../utils/addToCartFunction';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const requests = useSelector(getRequests);
  const request = requests['app/products/DATA_PRODUCTS'];

  const [product, setProduct] = useState(null);
  const [productExists, setProductExists] = useState(true);
  const [loading, setLoading] = useState(false);
  const [sideCartSummary, setSideCartSummary] = useState(false);

  const products = useSelector(getAllCartProducts);

  const [amount, setAmout] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          setLoading(true);
          const response = await fetch(`${API_URL}/api/products/${id}`);
          if (response.ok) {
            const product = await response.json();
            setProduct(product);
            setLoading(false);
          } else {
            console.error('Failed to fetch product');
            setProductExists(false);
          }
        } else {
          setProductExists(false);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setProductExists(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (productExists === false) {
    return <NotFound />;
  }

  if (loading === true) {
    return <Spinner />;
  }

  if (product === null) {
    return '';
  }

  const handleAddToCart = (e) => {
    e.preventDefault();
    const { id, name, main_img, price } = product;
    addToCartFunction(id, name, main_img, price, amount, products, dispatch);
    setSideCartSummary(true);
    setTimeout(() => {
      setSideCartSummary(false);
    }, 2500);
  };

  return (
    <>
      {request && request.pending && <Spinner />}
      {request && request.error && (
        <p>O nie, coś poszło nie tak :( Spróbuj później</p>
      )}
      {request && request.success && (
        <section className={styles.product}>
          <div className={styles.product__gallery}>
            <Gallery
              defaultImg={product.main_img}
              imgs={product.gallery}
              alt={product.name}
            />
          </div>
          <div className={styles.product__description}>
            <h1 className={styles.product__description___name}>
              {product.name}
            </h1>
            <span className={styles.product__description___price}>
              {product.price} zł
            </span>
            <div className={styles.product__description___cartAdd}>
              <Counter countProduct={setAmout} />
              <Button content={<BsBagPlusFill />} onClick={handleAddToCart} />
            </div>
            <div>
              <h2>{product.description_title}</h2>
              <p>{product.description_first_paragraph}</p>
              <h3>{product.description_subtitle}</h3>
              <p>{product.description_second_paragraph}</p>
            </div>
            <div className={styles.product__description___details}>
            <p>PARAMETRY:</p>
            {product.volume ? <p>objętość: {product.volume} m3</p> : ''}
            {product.height ? <p>wysokość: {product.height} m</p> : ''}
            {product.weight ? <p>waga: {product.weight} kg / m3</p> : ''}
            {product.length ? <p>długość: {product.length} m</p> : ''}
            {product.width ? <p>szerokość: {product.width} m</p> : ''}
            </div>
          </div>
        </section>
      )}
      {sideCartSummary && <SideCartSummary />}
    </>
  );
};

export default ProductPage;