const Mocha = require('mocha');
const path = require('path');
const fs = require('fs');

const mocha = new Mocha({
  reporter: 'list'
});

const testDir = 'test';

global.expect = require('chai').expect;
global.is = require('../lib');

fs.readdir(testDir, (err, files) => {
  files.forEach((file) => {
    if (path.extname(file) === '.js' && file !== 'browser.spec.js') {
      mocha.addFile(path.join(testDir, file));
    }
  });

  mocha.run((failures) => {
    process.on('exit', () => {
      process.exit(failures);
    });
  });
});
