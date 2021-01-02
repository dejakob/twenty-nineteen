const React = require('react');
const TimelineItem = require('./TimelineItem');

function Timeline(props) {
  return (
    <div
      className="timeline"
    >
      <ul
        className="timeline__items"
      >
        {props.children}
      </ul>
    </div>
  );
}

Timeline.Item = TimelineItem;

module.exports = Timeline;
