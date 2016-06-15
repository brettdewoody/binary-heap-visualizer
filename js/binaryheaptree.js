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
      return null;
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
    var value = this.tree[0]
      , last = this.tree.pop();

    if (this.tree.length > 0) {
      this.tree[0] = last;
      this.sink(0);
    }

    return value;
  },

  // Float a value to maintain the heap
  float: function (index) {
    var value = this.tree[index]
      , parentIndex = this.parent(index)
      , parentValue = this.val(parentIndex);

    if (parentIndex > -1 && parentValue >= value) {
      this.swap(parentIndex, index);
      this.float(parentIndex);
    }
  },

  // Sink a value to maintain the heap
  sink: function (index) {
    var value = this.tree[index]
      , lchild = this.lchild(index)
      , rchild = this.rchild(index)
      , lchildValue = lchild ? this.val(lchild) : null
      , rchildValue = rchild ? this.val(rchild) : null
      , swapIndex = null;

    if (lchild && !rchild && lchildValue < value) {
      this.swap(lchild, index);
      this.sink(lchild);
      return true;
    }

    if (lchild && rchild && (value > lchildValue || value > rchildValue)) {
      swapIndex = (lchildValue <= rchildValue ? lchild : rchild);
      this.swap(swapIndex, index);
      this.sink(swapIndex);
      return true;
    }
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
  },

  // Returns the value at the index
  val: function (index) {
    return this.tree[index];
  },

  // Swaps two nodes given their indexes
  swap: function (index1, index2) {
    var value1 = this.val(index1);
    this.tree[index1] = this.val(index2);
    this.tree[index2] = value1;
  },

  // Clear the tree
  clear: function () {
    this.tree = [];
  }
}
