var binaryheaptree = new BinaryHeapTree();
var binaryheapvisualizer = new BinaryHeapVisualizer("svg");

var handlePush = function() {
  binaryheaptree.push(Number(document.getElementById('controls-input').value));
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
