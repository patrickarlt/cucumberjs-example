var wd = require('wd');

var World = function World(callback) {
  this.browser = wd.remote(); // this.browser will be available in step definitions

  // log status output from web driver
  this.browser.on('status', function(info){
    console.log('\x1b[36m%s\x1b[0m', info);
  });

  // log commands from web driver
  this.browser.on('command', function(meth, path, data){
    console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path, data || '');
  });

  // run the callback when we are done do cucumber knows we are ready
  this.browser.init(function() {
    callback();
  });
};

exports.World = World;