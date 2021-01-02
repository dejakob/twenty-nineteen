const React = require('react');

function StoryContent(props) {
  return (
    <div
      className="story__content"
    >
      {props.children}
    </div>
  )
}

module.exports = StoryContent;
