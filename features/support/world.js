var wd = require('wd');

var remote = wd.remote(); // this.browser will be available in step definitions

// log status output from web driver
remote.on('status', function(info){
  console.log('\x1b[36m%s\x1b[0m', info);
});

// log commands from web driver
remote.on('command', function(meth, path, data){
  console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path, data || '');
});

var World = function World(callback) {
  this.browser = remote;

  // run the callback when we are done do cucumber knows we are ready
  this.browser.init({browserName: 'firefox'}, function() {
    callback();
  });
};

exports.World = World;