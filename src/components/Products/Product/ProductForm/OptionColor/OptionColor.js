import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = (props) => {
  const prepareColorClassName = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  return (
    <ul className={styles.choices}>
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
    </ul>
  );
};

OptionColor.propTypes = {
  colors: PropTypes.array.isRequired,
  setColor: PropTypes.func.isRequired,
  colorShirt: PropTypes.number.isRequired,
};

export default OptionColor;
