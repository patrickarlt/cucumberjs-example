module.exports = function () {
  this.World = require('../support/world.js').World;

  this.Given("I am on Google", function(callback) {
    this.browser.get('http://google.com', callback);
  });

  this.When('I search for "$query"', function(query, callback) {
    this.browser.elementByName('q', function (err, el) {
      el.type(query + '\n', callback);
    });
  });

  this.Then('I see a link to "$url"', function(url, callback) {
    this.browser.waitForElementByCss('a[href*="' + url + '"]', 5000, function (err, el) {
      if (err) {
        callback.fail();
      } else {
        this.browser.quit();
        callback();
      }
    }.bind(this));
  });

};