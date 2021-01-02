const React = require('react');
const Month = require('../Month/Month');
const Timeline = require('../Timeline/Timeline');
const DateIndicator = require('../DateIndicator/DateIndicator');
const Story = require('../Story/Story');

function January(props) {
  return (
    <Month
      title="January"
      backgroundImage="./images/mcdo.jpg"
    >
      <Timeline>
        <Timeline.Item>
          <Story>
            <Story.Emoji>🎊</Story.Emoji>
            <Story.Content>
              <DateIndicator
                value="2019-01-01"
              />
              <p>
                Woohoow!<br />New Year
              </p>
            </Story.Content>
          </Story>
        </Timeline.Item>
        <Timeline.Item>
          <Story>
            <Story.Image
              src="./images/antwerp.jpg"
              alt="Antwerp"
            />
            <Story.Content>
              <DateIndicator
                value="2019-01-26"
              />
              <p>
                Small Trip to Antwerp
              </p>
            </Story.Content>
          </Story>
        </Timeline.Item>
      </Timeline>

      
    </Month>
  )
}

module.exports = January;
