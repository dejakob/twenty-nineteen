const React = require('react');

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

function DateIndicator(props) {
  const date = props.value instanceof Date ? props.value : new Date(props.value);
  const month = MONTHS[date.getMonth()];
  const day = date.getDate();

  return (
    <time
      dateTime={props.value}
      className="date-indicator"
    >
      <span
        className="date-indicator__month"
      >
        {month}
      </span>
      <span
        className="date-indicator__day"
      >
        {day}
      </span>
    </time>
  );
}

module.exports = DateIndicator;