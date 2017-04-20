const multiply = require("./multiplicator.js");


class TestSuite {
  assertEquals(num1, num2) {
    return num1 === num2;
  }

  runTest(testName) {
    var result = this[testName]();
    console.log(result, testName);
  }

  runTests() {
    Object.getOwnPropertyNames(Object.getPrototypeOf(this))
      .filter(prop => typeof(this[prop]) === 'function')
      .filter(prop => prop.indexOf('test') !== -1)
      .forEach(test => this.runTest(test));
  }

  testMultiplyNPositiveNumbers() {
    return this.assertEquals(multiply(2, 3, 4), 24);
  }

  testMultiplyNNegativeNumbers() {
    return this.assertEquals(multiply(-2, -6, -7), -84);
  }

  testMultiplyNPositiveAndNegativeNumbers() {
    return this.assertEquals(multiply(-2, 3, -4), 24);
  }
}

let suite = new TestSuite();
suite.runTests();