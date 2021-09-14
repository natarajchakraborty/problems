const test = require("./test-10");

function deleteFromBST(t, queries) {
  const binary_search = (t, value) => {
    let parent = null;
    while (t) {
        if (value < t.value) {
            parent = t;
            t = t.left;
        } else if (value > t.value) {
            parent = t;
            t = t.right;
        } else {
            return [t, parent];
        }
    }
    return [null, null];
  };

  const deleteRecursive = (t, key) => {
    const [node, parent] = binary_search(t, key) || [];
      if (!node) {
        return root;
     } else if (node && node.left) {
        const [rightMost, rightMostParent] = getRightMostNode(node.left, node);
        if (rightMostParent) {
            rightMostParent.right = rightMost.left;
            rightMost.left = node.left;
        }
        rightMost.right = node.right;
        if (parent) {
            if (node.value < parent.value) {
                parent.left = rightMost;
            } else {
                parent.right = rightMost;
            }
        } else {
            root = rightMost;
        }
      }else if (node.right) {
        if (parent) {
            if (node.value < parent.value) {
                parent.left = node.right;
            } else {
                parent.right = node.right;
            }
        } else {
            root = node.right;
        }
    } else {
        if (parent) {
            if (node.value < parent.value) {
                parent.left = null;
            } else {
                parent.right = null;
            }
        } else {
            root = null;
        }
    }
    node.left = null;
    node.right = null;
    return root;
  };

  const getRightMostNode = (t) => {
    let parent = null;
    while (t.right) {
        parent = t;
        t = t.right;
    }
    return [t, parent];
  };

  for (query of queries) {
    t = deleteRecursive(t, query);
    console.log(t);
  }
  return t;
}

const t = {
    "value": 3,
    "left": {
        "value": 2,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": null
    },
    "right": {
        "value": 5,
        "left": null,
        "right": null
    }
};

console.log(JSON.stringify(deleteFromBST(t, [3, 2, 1])));
