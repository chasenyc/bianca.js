describe("Sum", function() {
  should("handle simple addition", function() {
    expect(sum(1,2)).toEqual(3);
    expect(sum(2,2)).toNotEqual(5);
    expect(sum(2,2)).toEqual(4);
    expect(sum(2,2)).toBeLessThan(5);
  });
  should("should handle negative numbers", function() {
    expect(sum(1,-1)).toEqual(0)
    expect(sum(-3,-1)).toEqual(-4)
    expect(sum(-3,-1)).toNotEqual(-4)
  });
  should("should handle one element", function() {
    expect(sumo(1)).toEqual(1)
  });
});


describe("Reverse", function() {
  should( "handles small string", function() {
    expect(reverse('alex')).toEqual('xela');
    expect(reverse('aacd')).toEqual('dcaa');
    expect(reverse('xax')).toNotEqual('axa');
  });
  should("takes an empty string", function() {
    expect(reverse('')).toEqual('');
  });
});
