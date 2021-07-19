//Styles
import styles from './Buttons.module.css';

const Buttons = ({ labels, onClick }) => {
  return labels.map(el => {
    return (
      <button
        type="button"
        onClick={onClick}
        key={el}
        className={[styles.button, styles[el]].join(' ')}
      >
        {el}
      </button>
    );
  });
};

export default Buttons;
