// describe("Basics", function () {
//   should("toEqual checks if argument passed to expect equals second argument", function() {
//     var life = 42;
//
//     expect(life).toEqual(42);
//   })
//
//   should("toNotEqual checks that there is not equality", function() {
//     var sum = function(numOne, numTwo) {
//       return (numOne + numTwo);
//     }
//     expect(sum(2,2)).toNotEqual(5);
//   })
//
//   should("toBeGreaterThan and toBeLessThan work as expected", function() {
//     var a = 2;
//     expect(a).toBeGreaterThan(1);
//     expect(a).toBeLessThan(3);
//   })
//
//   should("toBeCloseTo takes in a threshold and a target", function() {
//     var a = 2;
//     expect(a).toBeCloseTo(1, 3);
//   })
//
//   should("toThrowError checks if a function throws an error when invoked", function() {
//     function foo() {
//       throw 'bar'
//     }
//
//     function bar() {
//       return 'foo'
//     }
//     expect(foo).toThrowError();
//     expect(bar).toNotThrowError();
//   })
// });
