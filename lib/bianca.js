var results, countTotal = 0, failTotal = 0;

function it(desc, fn) {
  if (!results) { results = document.getElementById("results") }
  itShould(desc, fn)
  try { fn() } catch (e) { failShould(e, desc) }
  setSummary();
};

function itShould(desc) {
  var li = document.createElement("li");
  li.className = "it test";
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
  if (result.stack) { ul.appendChild(createStack()) }
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
    try { value() } catch (e) {
      val = { result: false, message: e.message, stack: e.stack }
    }
  } else {
    val = { result: value }
  }
  return val
};

function expect(value) {
  var val;
  if (typeof value === 'function') {
    val = value()
  } else {
    val = value
  }
  return expectResult(val);
};

function expectResult(value) {
  return {
    val: value,
    toEqual: eql,
    toNotEqual: notEql
  };

  function notEql (secondValue) {
    if (this.val === secondValue) {
      var error = {
        message: this.val + " expected to not equal " + secondValue,
      }
      throw error
    }

    return (this.val !== secondValue);
  };

  function eql (secondValue) {
    if (this.val !== secondValue) {
      var error = {
        message: this.val + " expected to equal " + secondValue,
      }
      throw error
    }

    return (this.val === secondValue);
  };
};
