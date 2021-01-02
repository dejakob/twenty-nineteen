const React = require('react');

function TimelineItem(props) {
  return (
    <li
      className="timeline__item"
    >
      {props.children}
    </li>
  )
}

module.exports = TimelineItem;
