import { useState } from "react";

const FullStackOpen = (props) => {
  return (
    <div>
      <p>FullStackOpen Render Test</p>
      <CustomerFeedback />
    </div>
  );
};

const Statistics = ({ badFeedback, neutralFeedback, goodFeedback }) => {
  let totalFeedbackCount = badFeedback + neutralFeedback + goodFeedback;

  const getAverage = () => {
    if (totalFeedbackCount == 0 || isNaN(totalFeedbackCount)) {
      return 0;
    }
    let badFeedbackValue = -1;
    let neutralFeedbackValue = 0;
    let goodFeedbackValue = 1;

    let weightedFeedbackSum =
      badFeedback * badFeedbackValue +
      neutralFeedback * neutralFeedbackValue +
      goodFeedback * goodFeedbackValue;
    let average = weightedFeedbackSum / totalFeedbackCount;
    return average;
  };

  const getPositiveFeedbackPercentage = () => {
    if (totalFeedbackCount === 0) {
      return 0;
    }
    let percentage = (goodFeedback / totalFeedbackCount) * 100;
    return percentage;
  };

  return (
    <>
      <h4>Statistics:</h4>
      {totalFeedbackCount > 0 ? (
        <>
          <table>
            <tbody>
              <StatisticsLineRowStyle text="Bad" value={badFeedback} />
              <StatisticsLineRowStyle text="Neutral" value={neutralFeedback} />
              <StatisticsLineRowStyle text="Good" value={goodFeedback} />
              <StatisticsLineRowStyle
                text="Average Feedback Grade"
                value={getAverage()}
              />
              <StatisticsLineRowStyle
                text="Positive Feedback Percentage"
                value={getPositiveFeedbackPercentage()}
              />
            </tbody>
          </table>
        </>
      ) : (
        <p>No feedback given.</p>
      )}
    </>
  );
};

const CustomerFeedback = (props) => {
  const [badFeedback, setBadFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [goodFeedback, setGoodFeedback] = useState(0);

  return (
    <>
      <h1>Give feedback:</h1>
      <Button onClick={() => setBadFeedback(badFeedback + 1)} text="Bad" />

      <Button
        onClick={() => setNeutralFeedback(neutralFeedback + 1)}
        text="Neutral"
      />

      <Button onClick={() => setGoodFeedback(goodFeedback + 1)} text="Good" />
      <Statistics
        badFeedback={badFeedback}
        neutralFeedback={neutralFeedback}
        goodFeedback={goodFeedback}
      />
    </>
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const StatisticsLine = (props) => {
  return (
    <>
      <p>
        {props.text}: {props.value}
      </p>
    </>
  );
};

const StatisticsLineRowStyle = (props) => {
  return (
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </>
  );
};

export default FullStackOpen;
