var BinaryHeapTree = function (tree) {
  this.tree = tree || [];
}

BinaryHeapTree.prototype = {
  // Returns the index of the left child given a parent index
  lchild: function (index) {
    if (this.tree.length > (2 * index) + 1) {
      return ((2 * index) + 1);
    } else {
      return null;
    }

  },

  // Returns the index of the right child given a parent index
  rchild: function (index) {
    if (this.tree.length > (2 * index) + 2) {
      return ((2 * index) + 2);
    } else {
      return null;
    }
  },

  // Returns the index of the parent given a child index
  parent: function (index) {
    if (this.tree.length > index) {
      return Math.floor((index-1)/2);
    } else {
      return -1;
    }
  },

  // Pushes a value to the end of the heap and restores heap order
  push: function (value) {
    if (value >= 0) {
      this.tree.push(value);
      this.float(this.tree.length - 1);
    }
  },

  // Pops off the root node then moves the last node to the root
  //  and restores heap order
  pop: function () {
    var value = this.tree[0];
    var last = this.tree.pop();

    if (this.tree.length > 0) {
      this.tree[0] = last;
      this.sink(0);
    }

    return value;
  },

  // Float a value to maintain the heap
  float: function (index) {
    var value = this.tree[index];

    var parentIndex = this.parent(index);

    if (parentIndex != -1 && this.tree[parentIndex] >= value) {
      var parentValue = this.tree[parentIndex];
      this.tree[parentIndex] = value;
      this.tree[index] = parentValue;

      this.float(parentIndex);
    }

  },

  // Sink a value to maintain the heap
  sink: function (index) {
    var size = this.tree.length;
    var value = this.tree[index];

    if (this.lchild(index) < size) {
      var lchildValue = this.tree[this.lchild(index)];
      if (lchildValue < value) {
        this.swap(this.lchild(index), index);
        this.sink(this.lchild(index));
      }
    } else if (this.rchild(index) < size) {
      var rchildValue = this.tree[this.rchild(index)];
      if (rchildValue < value) {
        this.swap(this.rchild(index), index);
        this.sink(this.rchild(index));
      }
    } else {
      this.tree.push(value);
    }

  },

  // Swaps two nodes given their indexes
  swap: function (index1, index2) {
    var value1 = this.tree[index1];
    this.tree[index1] = this.tree[index2];
    this.tree[index2] = value1;
  },

  // Returns the children of a node
  children: function (index) {
    var children = [];

    if (this.lchild(index)) {
      children.push(this.lchild(index));
    } else {
      return null;
    }

    if (this.rchild(index)) {
      children.push(this.rchild(index));
    }

    return children;
  }
}
