var test = require('tape');
var module2 = require('../dev-assets/js/modules/module2');

test('module2.square()', function(assertion) {
  var actual = module2.square(12),
      expected = 144;

  assertion.equal(actual, expected, ": should return 144");
  assertion.end();
});

test('module2.function2()', function(assertion) {
  var actual = module2.function2(),
      expected = true;

  assertion.equal(actual, expected, ": should return true");
  assertion.end();
});
