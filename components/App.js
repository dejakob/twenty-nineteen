const React = require('react');
const Intro = require('./Intro/Intro');
const Month = require('./Month/Month');

function Page() {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="./style.css" />
        <title>Twenty Nineteen</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </head>
      <body className="app__body">
        <main className="app__main">
          <Intro />
          <Month
            title="January"
            backgroundImage="./images/mcdo.jpg"
          />
          <Month
            title="February"
            backgroundImage="./images/bike.jpg"
          />
          <Month
            title="March"
            backgroundImage="./images/amsterdam.jpg"
          />
          <Month
            title="April"
            backgroundImage="./images/hardrock.jpg"
          />
          <Month
            title="May"
            backgroundImage="./images/tnw.jpg"
          />
          <Month
            title="June"
            backgroundImage="./images/ash.jpg"
          />
          <Month
            title="July"
            backgroundImage="./images/alegrify.jpg"
          />
          <Month
            title="August"
            backgroundImage="./images/castelldefels.jpg"
          />
          <Month
            title="September"
            backgroundImage="./images/port.jpg"
          />
          <Month
            title="October"
            backgroundImage="./images/apt.jpg"
          />
          <Month
            title="November"
            backgroundImage="./images/november.jpg"
          />
          <Month
            title="December"
            backgroundImage="./images/december.jpg"
          />
        </main>
      </body>
    </html>
  )
}

module.exports = Page;