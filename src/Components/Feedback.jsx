import { useState } from 'react';
//Components
import Section from './Section/Section';
import Buttons from './Buttons/Buttons';
import StatisticList from './StatisticList/StatisticList';
import StatisticItems from './StatisticItems/StatisticItems';
//Utils
import countPositiveFeedbackPercentage from 'utils/countPositiveFeedbackPercentage';
import countTotalFeedback from 'utils/countTotalFeedback';
//Styles
import styles from './Feedback.module.css';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const percentage = countPositiveFeedbackPercentage(good, bad);
  const total = countTotalFeedback(good, neutral, bad);

  const listEntries = (function () {
    return {
      good,
      neutral,
      bad,
      total,
      'positive feedback': percentage,
    };
  })();

  function onClickButton(event) {
    const buttonLabel = event.target.innerHTML;

    switch (buttonLabel) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  }

  return (
    <div className={styles.container}>
      <Section>
        <Buttons onClick={onClickButton} labels={['good', 'neutral', 'bad']} />
      </Section>
      {total && (
        <StatisticList>
          <StatisticItems listItemsStates={Object.entries(listEntries)} />
        </StatisticList>
      )}
    </div>
  );
};

export default Feedback;
