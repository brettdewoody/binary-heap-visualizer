# A visualizer for Min Heap Binary Trees

A min heap binary constructor and visualizer. 

<small>From [Wikipedia](https://en.wikipedia.org/wiki/Binary_heap):</small>

A binary heap is a heap data structure created using a binary tree. It can be seen as a binary tree with two additional constraints:

* **Shape property**
A binary heap is a complete binary tree; that is, all levels of the tree, except possibly the last one (deepest) are fully filled, and, if the last level of the tree is not complete, the nodes of that level are filled from left to right.

* **Heap property**
All nodes are less than or equal to each of their children.

## Use

There are two ways to use this repo - using the visual heap builder, or cloning the repo and using the `binaryheaptree` constructor.

### Visualizer
The Min Heap Binary Tree Visualizer can be found at this repository's [Pages URL](http://brettdewoody.github.io/binary-heap-visualizer/).

Enter a value in the input field in the top right and click the _Push_ button to push the value to the min heap binary tree.

Click the _Pop_ button to pop the lowest value.

### Constructor
You can also use the `binaryheaptree` object constructor. To create a new Min Heap Tree:

    var myMinHeapTree = new binaryheaptree();

## Methods

Once you've created a `new binaryheaptree()` there are several methods available:

**.push()**

Pushed a value onto the end of the heap and floats the value to its appropriate position in the heap.

**.pop()**

Returns the lowest value, the moves the last value in the tree to the root and sinks the value to its appropriate position in the heap.

**.clear()**

Clears the tree.

**.lchild(index)**

Returns the index of the left child from the parent `index` argument.

**.rchild(index)**

Returns the index of the right child from the parent `index` argument.

**.parent(index)**

Returns the index of the parent from the child `index` argument.

**.float(index)**

Recursively floats the node at `index` to its appropriate position.

**.sink(index)**

Recursively sinks the node at `index` to its appropriate position.

**.children(index)**

Returns an array of length 2 containing the indexes of the children from the parent `index`.

**.swap(index1, index2)**

Swaps the nodes at `index1` and `index2`.
