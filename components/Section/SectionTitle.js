const React = require('react');

function SectionTitle(props) {
  return(
    <h2
      className="section__title"
    >
      {props.children}
    </h2>
  )
}

module.exports = SectionTitle;
