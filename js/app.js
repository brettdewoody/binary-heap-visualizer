var binaryheaptree = new BinaryHeapTree();
var binaryheapvisualizer = new BinaryHeapVisualizer("svg");

var handlePush = function() {
  var input = document.getElementById('controls-input');
  binaryheaptree.push(Number(input.value));
  input.value = "";
  input.focus();
  visualize();
};

var handlePop = function() {
  var popped = binaryheaptree.pop();
  alert('The popped value is ' + popped);
  visualize();
}

var handleClear = function() {
  binaryheaptree.clear();
  visualize();
}

var visualize = function () {
  binaryheapvisualizer.clearTree();
  binaryheapvisualizer.drawTree(binaryheaptree, 0);
};
