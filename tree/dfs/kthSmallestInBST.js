//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function kthSmallestInBST(t, k) {
    let count = 0;
    // inoreder traversal
    const kthSmallest = function (root, k)
    {
        // base case
        
        if (root == null)
            return null;

        
        // search in left subtree
        let left = kthSmallest(root.left, k);
        
        // if k'th smallest is found in left subtree, return it
        if (left != null)
            return left;
        
        // if current element is k'th smallest, return it
        count++;
        if (count == k)
            return root;
        
        // else search in right subtree
        return kthSmallest(root.right, k);
    };

    const smallest = kthSmallest(t, k);
    

    return smallest ? smallest.value: null;
}



const t = {
    "value": 3,
    "left": {
        "value": 1,
        "left": null,
        "right": null
    },
    "right": {
        "value": 5,
        "left": {
            "value": 4,
            "left": null,
            "right": null
        },
        "right": {
            "value": 6,
            "left": null,
            "right": null
        }
    }
};
console.log(kthSmallestInBST(t, 4))

        //    3
        //  /  \
        // 1    5
        //     / \
        //   4     6

