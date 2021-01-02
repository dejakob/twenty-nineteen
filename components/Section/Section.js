const React = require('react');
const SectionTitle = require('./SectionTitle');

function Section(props) {
  return (
    <section
      className="section"
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      <div
        className="section__content"
      >
        {props.children}
      </div>
    </section>
  )
}

Section.Title = SectionTitle;

module.exports = Section;