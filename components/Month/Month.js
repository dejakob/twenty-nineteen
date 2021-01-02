const React = require('react');
const Section = require('../Section/Section');

function Month(props) {
  const { backgroundImage, title, children } = props;

  return (
    <Section
      backgroundImage={backgroundImage}
    >
      <Section.Title>{title}</Section.Title>
      {children}
    </Section>
  );
}

module.exports = Month;
