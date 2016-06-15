var BinaryHeapVisualizer = function (element) {
  this.container = d3.select(element);

  d3.selection.prototype.moveToBack = function() {
    return this.each(function() {
        var firstChild = this.parentNode.firstChild;
        if (firstChild) {
            this.parentNode.insertBefore(this, firstChild);
        }
    });
  };
}

BinaryHeapVisualizer.prototype = {
  drawTree: function (binaryheaptree, index, rootCoords, parentCoords) {
    var root = index || 0
      , children = binaryheaptree.children(root)
      , treeDepth = Math.floor(Math.log2(binaryheaptree.tree.length)) + 1
      , nodeDepth = Math.floor(Math.log2(index+1)) + 1
      , rootCoords = [
        (rootCoords ? rootCoords[0] : window.innerWidth/2),
        (rootCoords ? rootCoords[1] : 80)
      ]
      , parentCoords = parentCoords || []
      , radius = 12;

    if (!binaryheaptree.tree.length) {
      return;
    }

    var node = this.drawNode(binaryheaptree.tree[root], rootCoords, parentCoords, radius);

    if (children) {
      for (var i = 0; i < children.length; i++) {
        var coords = [
          rootCoords[0] + ((i ? 1 : -1) * (radius/1.5) * Math.pow(2, (treeDepth-nodeDepth))),
          rootCoords[1] + 2 * radius
        ];
        this.drawTree(binaryheaptree, children[i], coords, rootCoords);
      }
    }
  },

  drawNode: function (value, coords, parentCoords, radius) {
    var node = this.container.append("g")
      , x = coords[0]
      , y = coords[1]
      , coords = coords || []
      , color = "#000000";

    if (parentCoords.length) {
      var line = node
        .append("line")
        .attr("x1", parentCoords[0])
        .attr("y1", parentCoords[1])
        .attr("x2", coords[0])
        .attr("y2", coords[1])
        .attr("stroke-width", 3)
        .attr("stroke", color)
        .attr("opacity", 0.3);
    }

    var circle = node
      .append("ellipse")
      .attr("cx", x)
      .attr("cy", y)
      .attr("rx", radius)
      .attr("ry", radius)
      .attr("fill", "white")
      .attr("stroke", color);

    var text = node
      .append("text")
      .attr("x", x)
      .attr("y", y)
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("fill", color)
      .text(value);

    node.moveToBack();

    return node;
  },

  clearTree: function () {
    d3.select("svg").selectAll("*").remove();
  }
}
