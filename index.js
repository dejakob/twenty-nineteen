const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const Compiler = require('google-closure-compiler');
const App = require('./components/App');

(async function () {
  try {
    const output = renderToStaticMarkup(<App />);
    await writeFile('./docs/index.html', output);

    const src = [
      //(await readFile('./js/abnormal-scroll.js')).toString(),
      //(await readFile('./js/scroll-viewport.js')).toString(),
    ].join('');
    const compiler = new Compiler.jsCompiler({
      jsCode: [{ src }],
      languageIn: 'ECMASCRIPT6',
      languageOut: 'ECMASCRIPT5',
      processCommonJsModules: true,
      compilationLevel: 'ADVANCED'
    });
    const { compiledCode } = compiler.run();
    await writeFile('./docs/script.js', compiledCode);
  }
  catch (ex) {
    console.log('An error occured', ex);
  }
})()