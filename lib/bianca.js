var results, countTotal = 0, failTotal = 0;

function describe(desc, fn) {
  if (!results) { results = document.getElementById("results") }
  describeShould(desc, fn)
  try { fn() } catch (e) { failShould(e, desc) }
  setSummary();
};

function describeShould(desc) {
  var li = document.createElement("li");
  li.className = "suite test";
  li.appendChild(document.createTextNode(desc));
  li = results.appendChild(li);
  return li;
};

function setSummary() {
  var summary =  document.getElementById("summary");
  var desc = countTotal + " Specs, " + failTotal + " Failures ";
  summary.innerHTML = desc;
  summary.className = (failTotal > 0) ? "summary fail-bg" : "summary pass-bg"
};

function should(desc, value) {
  var value = evaluateValue(value);
  var li = document.createElement("li");
  li.className = value.result ? "pass should" : "fail should";
  li.appendChild(document.createTextNode(desc));
  li = results.appendChild(li);
  addCount(value.result, desc)
  if (!value.result) {
    addFailExplanation(li, value)
  }
  return li;
};

function failShould(error, desc) {
  var li = document.createElement("li");
  li.className = "fail should";
  li.appendChild(document.createTextNode(desc + ' failed: ' + error.message));
  results.appendChild(li);
};

function addFailExplanation(element, result) {
  var ul = document.createElement("ul");
  ul.className = 'fail-reason';
  var liMessage = document.createElement("li");
  liMessage.className = "fail-message";
  liMessage.appendChild(document.createTextNode(result.message));
  ul.appendChild(liMessage);
  if (result.stack) { ul.appendChild(createStack(result)) }
  element.appendChild(ul);
}

function createStack (result) {
  var liStack = document.createElement("li")
  liStack.className = "fail-stack";
  liStack.innerHTML = result.stack.replace(/\r?\n|\r/g, "<br>");
  return liStack;
}

function addCount(value, desc) {
  countTotal++;
  if (!value) { failTotal++ }
  var li = document.createElement("li")
  li.className = value ? "pass-bg count" : "fail-bg count";
  li.title = desc;
  var counter = document.getElementById("count");
  counter.appendChild(li)
};

function evaluateValue(value) {
  var val = {};
  if (typeof value === 'function') {
    val = { result: true }
    try {
      value()
    } catch (e) {
      val = { result: false, message: e.message, stack: e.stack }
    } finally {
      return val
    }
  } else {
    val = { result: value }
  }
  return val
};

function expect(value) {
  return expectResult(value);
};

function expectResult(value) {
  return {
    val: value,
    toEqual: eql,
    toNotEqual: notEql,
    toBeGreaterThan: greaterThan,
    toBeLessThan: lessThan,
    toThrowError: toThrowError,
    toBeCloseTo: closeTo
  };

  function notEql (secondValue) {
    if (this.val === secondValue) {
      var error = {
        message: this.val + " expected to not equal " + secondValue
      }
      throw error
    }
    return (this.val !== secondValue);
  };

  function eql (secondValue) {
    if (this.val !== secondValue) {
      var error = {
        message: this.val + " expected to equal " + secondValue
      }
      throw error
    }
    return (this.val === secondValue);
  };

  function greaterThan (secondValue) {
    if (this.val <= secondValue) {
      var error = {
        message: this.val + " expected to be greater than " + secondValue
      }
      throw error
    }
    return (this.val > secondValue);
  };

  function lessThan (secondValue) {
    if (this.val >= secondValue) {
      var error = {
        message: this.val + " expected to be less than " + secondValue
      }
      throw error
    }
    return (this.val < secondValue);
  };

  function closeTo (threshold, secondValue) {
    var bottom = (this.val - Math.abs(threshold))
    var top = (this.val + Math.abs(threshold))
    if (between(secondValue, bottom, top) === false) {
      debugger
      var error = {
        message: this.val + " is not close to " + secondValue + " with a threshold of " + threshold
      }
      throw error
    }
    return (between(secondValue, bottom, top))
  }

  function toThrowError (secondValue) {
    // TODO
  };
};

function between(target, bottom, top) {
  if (target <= top && target >= bottom) {
    return true;
  } else {
    return false;
  }
}
