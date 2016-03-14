# bianca.js

*A simple test framework for JavaScript.*

![alt text][preview]

Bianca is a lightweight behavior-driven development framework for testing JavaScript code. Bianca.js is built completely with vanilla JavaScript and requires no other libraries to run. It does not need a DOM and uses basic syntax for easy use. This test suite was inspired by [Jasmine][1] and [Secrets of the JavaScript Ninja][2].

## Download/Use

To use simply clone [this repository][3] or [download here][4]. Simply look in the `SpecRunner.html` file for where to include both the source code as well as the spec files. Commented out code will indicate where to place the `script` tags.

## Suites: `describe` your tests

A test suite begins with a call to the global bianca.js function `describe` with two parameters: a string and a function. The string is the name of the suite and the function is the block of code that implements the suite.

## Specs: `should` comply with your specifications

Specs are defined by calling the global bianca.js function `should`, which, like `describe` takes a string and a function. The string is the explanation of what this spec addresses in regard to the suite. A spec contains one or more expectations that test the source code. Unless all expectations pass, the spec is considered failing. One more important note is that after one expectation fails, the spec will cease to run and all other expectations will be ignored.

## Expectations: `expect` your code to function in a certain way

Expectations are constructed with the `expect` function. It takes in a value and is chained with a matcher and which returns a boolean response.

### Matchers

Each matcher implements a boolean comparison between the actual and the expected. This will then lead to the passing or failing of the spec.

Current matchers available:
- [x] `toEqual` which checks for equality
- [x] `toNotEqual` which checks for inequality
- [x] `toBeGreaterThan` checks if greater than a value
- [x] `toBeLessThan` checks if less than a value
- [x] `toBeCloseTo` checks if close to a given target, takes in a threshold
- [x] `toThrowError` checks if a function throws an error
- [x] `toNotThrowError` checks if a function does not throw an error

Future matchers:


[preview]:/lib/assets/preview.png "bianca preview"
[1]:http://jasmine.github.io/
[2]:https://www.manning.com/books/secrets-of-the-javascript-ninja
[3]:https://github.com/chasenyc/bianca.js
[4]:javascript:void(0)
