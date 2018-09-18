var test = require('tape');
var module2 = require('../src/js/modules/module2');
var app_js = require('../src/js/modules/app');

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

test('app_js', function(assertion) {  
  var actual = app_js.KINDLING.methods.double(2),
      expected = 4;

  assertion.equal(actual, expected, ": should return 4");
  assertion.end();
});
