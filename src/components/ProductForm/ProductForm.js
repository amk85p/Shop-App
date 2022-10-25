import styles from './ProductForm.module.scss';

import Button from './Button/Button';
import OptionSize from './OptionSize/OptionSize';
import OptionColor from './OptionColor/OptionColor';
import PropTypes from 'prop-types';

const ProductForm = (props) => {
  return (
    <form>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <OptionSize
          sizes={props.sizes}
          setSize={props.setSize}
          sizeShirt={props.sizeShirt}
        />
        {/* <ul className={styles.choices}>
          {props.sizes.map((size, item) => (
            <li key={item}>
              <button
                type='button'
                onClick={() => (props.setSize(item), console.log(size, item))}
                className={item === props.sizeShirt && styles.active}
              >
                {' '}
                {size.name}{' '}
              </button>
            </li>
          ))}
        </ul> */}
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <OptionColor
          sizes={props.sizes}
          colors={props.colors}
          setColor={props.setColor}
          colorShirt={props.colorShirt}
          color={props.color}
        />
        {/* <ul className={styles.choices}>
          {props.colors.map((item, index) => (
            <li key={item}>
              <button
                type='button'
                onClick={() => (
                  props.setColor(index), console.log('color changed ', item)
                )}
                className={clsx(
                  prepareColorClassName(item),
                  index === props.colorShirt ? styles.active : undefined
                )}
              />
            </li>
          ))}
        </ul> */}
      </div>
      <Button className={styles.button} onClick={props.onSubmit}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  setColor: PropTypes.func.isRequired,
  setSize: PropTypes.func.isRequired,
  colorShirt: PropTypes.number.isRequired,
  sizeShirt: PropTypes.number.isRequired,
};

export default ProductForm;
