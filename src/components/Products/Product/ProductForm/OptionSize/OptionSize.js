import styles from './OptionSize.module.scss';
import PropTypes from 'prop-types';

const OptionSize = (props) => {
  return (
    <ul className={styles.choices}>
      {props.sizes.map((size, item) => (
        <li key={item}>
          <button
            type='button'
            onClick={() => (props.setSize(item), console.log(size, item))}
            className={item === props.sizeShirt ? styles.active : undefined}
          >
            {' '}
            {size.name}{' '}
          </button>
        </li>
      ))}
    </ul>
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  setSize: PropTypes.func.isRequired,
  sizeShirt: PropTypes.number.isRequired,
};

export default OptionSize;
