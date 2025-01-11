import styles from './Gallery.module.scss';
import { useState } from 'react';
import { IMGS_URL } from '../../../config';

const Gallery = ({ defaultImg, alt, imgs }) => {
  const [image, setImage] = useState(defaultImg);
  const [expanded, setExpanded] = useState(false);

  const gallery = imgs.split(',');

  return (
    <section className={styles.gallery}>
      {expanded && (
        <div
          className={styles.gallery__modal}
          onClick={() => setExpanded(false)}
        >
          <img
            className={styles.gallery__modal___img}
            src={IMGS_URL + image}
            alt={alt}
          />
        </div>
      )}
      <img
        className={styles.gallery__img}
        src={IMGS_URL + image}
        alt={alt}
        onClick={() => setExpanded(true)}
      />
      <div className={styles.gallery__min}>
        <img
          onClick={() => setImage(defaultImg)}
          className={styles.gallery__min___image}
          src={IMGS_URL + defaultImg}
          alt={alt}
        />
        {gallery.map((img, index) => (
          <img
            onClick={() => setImage(img)}
            className={styles.gallery__min___image}
            key={index}
            src={IMGS_URL + img}
            alt={alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;