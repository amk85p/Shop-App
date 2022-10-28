import styles from './Product.module.scss';

import { useMemo, useState } from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProductForm';
import PropTypes from 'prop-types';

const Product = (props) => {
  const [sizeShirt, setSize] = useState(0);
  const [colorShirt, setColor] = useState(0);

  // const addPrice = props.sizes[sizeShirt].additionalPrice;

  const size = props.sizes[sizeShirt].name;
  const color = props.colors[colorShirt];

  // const getPriceAmount = props.basePrice + addPrice;
  // const getPrice = () => props.basePrice + addPrice;
  // console.log('getPrice', props.basePrice, addPrice);

  const getPrice = useMemo(() => {
    return props.basePrice + props.sizes[sizeShirt].additionalPrice;
  }, [sizeShirt]);

  const handleSubmit = (e) => (
    e.preventDefault(),
    console.log(
      'Product:',
      props.title,
      ', price',
      getPrice,
      ', size',
      size,
      ', color',
      color
    )
  );

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <ProductImage title={props.title} name={props.name} color={color} />
        {/* <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.colors[colorShirt]}.jpg`} /> */}
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice} $</span>
        </header>
        <ProductForm
          sizes={props.sizes}
          color={color}
          colors={props.colors}
          setSize={setSize}
          setColor={setColor}
          colorShirt={colorShirt}
          sizeShirt={sizeShirt}
          onSubmit={handleSubmit}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  basePrice: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
};

export default Product;
