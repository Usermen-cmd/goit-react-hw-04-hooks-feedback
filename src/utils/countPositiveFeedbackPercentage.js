export default function countPositiveFeedbackPercentage(good, bad) {
  return bad + good ? Math.floor((good / (good + bad)) * 100) + '%' : 0;
}
