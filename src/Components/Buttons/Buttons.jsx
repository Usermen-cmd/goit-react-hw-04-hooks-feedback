const Buttons = ({ labels, onClick }) => {
  return labels.map(el => {
    return (
      <button type="button" onClick={onClick} key={el}>
        {el}
      </button>
    );
  });
};

export default Buttons;
