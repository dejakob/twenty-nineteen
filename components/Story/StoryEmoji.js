const React = require('react');

function StoryEmoji(props) {
  return (
    <span
      aria-hidden="true"
      className="story__emoji"
    >
      {props.children}
    </span>
  );
}

module.exports = StoryEmoji;
