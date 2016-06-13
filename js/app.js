var binaryheaptree = new BinaryHeapTree();
var binaryheapvisualizer = new BinaryHeapVisualizer("svg");

var visualize = function () {
  d3.select("svg").selectAll("*").remove();
  binaryheapvisualizer.drawTree(binaryheaptree, 0);
}
