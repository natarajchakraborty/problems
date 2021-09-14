//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function isTreeSymmetric(t) {
   const left = t.left;
   const right = t.right;
   const leftTraversal = labelOrderTraversal(left, true);
   const rightTraversal = labelOrderTraversal(right, false);
   return isSameTraversal(leftTraversal, rightTraversal);
}

function labelOrderTraversal(root, isLeft) {
    const traversal = [];
    const q = [];
    q.push({n: root, d: 'rt'} );
    while(q.length) {
        const node = q.pop();
        traversal.push({n : node.n.value, d: node.d});
        if(isLeft) {
            node.n.left && q.push({n: node.n.left, d: 'r'});
            node.n.right && q.push({n: node.n.right, d: 'l'});
        } else {
            node.n.right && q.push({n: node.n.right, d: 'r'});
            node.n.left && q.push({n: node.n.left, d: 'l'});
        }
    }
    return traversal;
}

function isSameTraversal(traversal1, traversal2){
    if(traversal1.length !== traversal2.length){
        return false;
    } 
    for(let i = 0 ; i < traversal1.length; i++){
        if(traversal1[i].n !== traversal2[i].n || traversal1[i].d !== traversal2[i].d){
            return false;
        }
    }
    return true;
}

const  t = {
    "value": 1,
    "left": {
        "value": 2,
        "left": {
            "value": 3,
            "left": null,
            "right": null
        },
        "right": {
            "value": 4,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 2,
        "left": {
            "value": 4,
            "left": null,
            "right": null
        },
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    }
};

const t1 = {
    "value": 1,
    "left": {
        "value": 2,
        "left": null,
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 2,
        "left": null,
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    }
}

console.log(isTreeSymmetric(t));
console.log(isTreeSymmetric(t1));