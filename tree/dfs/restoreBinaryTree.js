//
// Binary trees are already defined with this interface:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}
function restoreBinaryTree(inorder, preorder) {
    let preIndex = 0;

    const inOrderMap = {};

    for(let i = 0 ; i < inorder.length; i++){
        inOrderMap[inorder[i]] = i;
    }

    const construct = (inStart, inEnd) => {
        if(inStart > inEnd){
            return null;
        }

        const root = new Tree(preorder[preIndex]);
        ++preIndex;

        if(inStart === inEnd) {
            return root;
        }

        const inIndex = inOrderMap[root.value];
        root.left = construct(inStart, inIndex - 1);
        root.right = construct(inIndex + 1, inEnd);
        return root;
    }

    return construct(0, inorder.length - 1);
}


console.log(restoreBinaryTree([4, 2, 1, 5, 3, 6], [1, 2, 4, 3, 5, 6]));