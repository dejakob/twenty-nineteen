const React = require('react');
const Section = require('../Section/Section');

function Intro(props) {
  return (
    <Section
      backgroundImage="./images/mountain.jpg"
    >
      <heading
        className="intro"
      >
        <h1
          className="intro__title"
          dangerouslySetInnerHTML={{
            __html: `
            <svg>
              <g>
                <text text-anchor="middle" x="50%" y="50%">2019</text>
                <text text-anchor="middle" x="50%" y="50%">2019</text>
                <text text-anchor="middle" x="50%" y="50%">2019</text>
                <text text-anchor="middle" x="50%" y="50%">2019</text>
                <text text-anchor="middle" x="50%" y="50%">2019</text>
              </g>
            </svg>
          `
          }}
        />
        <p
          className="intro__subtitle"
        >
          In at <span>🥜</span>shell
        </p>
      </heading>
    </Section>
  )
}

module.exports = Intro;