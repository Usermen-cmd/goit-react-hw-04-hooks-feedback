const StatisticItems = ({ listItemsStates }) => {
  return (
    <>
      {listItemsStates.map(el => {
        return (
          <li key={el[0]}>
            {el[0]} : {el[1]}
          </li>
        );
      })}
    </>
  );
};

export default StatisticItems;
