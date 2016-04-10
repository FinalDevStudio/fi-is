const Mocha = require('mocha');
const path = require('path');
const fs = require('fs');

const mocha = new Mocha({ /* jshint ignore: line */
  reporter: 'list'
});

const testDir = 'test';

global.expect = require('chai').expect;
global.is = require('../lib');

fs.readdir(testDir, (err, files) => {
  files.forEach((file) => {
    if (path.extname(file) === '.js' && path.basename(file, '.js') !== 'browser') {
      mocha.addFile(path.join(testDir, file));
    }
  });

  mocha.run((failures) => {
    process.on('exit', () => {
      process.exit(failures);
    });
  });
});
