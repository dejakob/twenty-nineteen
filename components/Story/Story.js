const React = require('react');
const StoryEmoji = require('./StoryEmoji');
const StoryContent = require('./StoryContent');
const StoryImage = require('./StoryImage');

function Story(props) {
  return (
    <div
      className="story"
    >
      {props.children}
    </div>
  );
}

Story.Emoji = StoryEmoji;
Story.Content = StoryContent;
Story.Image = StoryImage;

module.exports = Story;
