class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  class TreeDiameter {
  
    constructor() {
      this.treeDiameter = 0;
      this.maxPaths = [];
      this.maximumLength = 0;
    }
  
    find_diameter(root) {
        this.find_paths_recursive(root, []);
        const longPath1 = this.maxPaths[this.maxPaths.length - 1];
        const longPath2 = this.maxPaths[this.maxPaths.length - 2];
        /// remove the common element starting from beginng

        for(let i = 0; i < Math.min(longPath1.length, longPath2.length); i++ ){
            if(longPath1[0] === longPath2[0]) {
                longPath1.shift();
                longPath2.shift();
            }
        }
        return longPath1.length + longPath2.length + 1;
    }

    find_paths_recursive = (currentNode, currentPath) => {
        if (currentNode === null) {
          return;
        }
      
        currentPath.push(currentNode.value);
      
        if (currentNode.left === null && currentNode.right === null) {
          // only add if path length greater than last path
          if(currentPath.length >= this.maximumLength) {
              if(!this.is_common(currentPath)) {
                this.maxPaths.push([...currentPath]);
                this.maximumLength = currentPath.length;
              }
          }
        } else {
            this.find_paths_recursive(currentNode.left, [...currentPath]);
            this.find_paths_recursive(currentNode.right, [...currentPath]);
        }
    
        currentPath.pop();
      }

      is_common = (currentPath) => {
        return this.maxPaths.some((el) => {
            if(el[0] === currentPath[0] && el[1] === currentPath[1]){
                return true;
            }
        });
      } 
  };
  
  
  var treeDiameter = new TreeDiameter()
  var root = new TreeNode(1)
  root.left = new TreeNode(2)
  root.right = new TreeNode(3)
  root.left.left = new TreeNode(4)
  root.right.left = new TreeNode(5)
  root.right.right = new TreeNode(6)
  console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`)
  root.left.left = null
  root.right.left.left = new TreeNode(7)
  root.right.left.right = new TreeNode(8)
  root.right.right.left = new TreeNode(9)
  root.right.left.right.left = new TreeNode(10)
  root.right.right.left.left = new TreeNode(11)
  console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`)
  
  
  ///      1
  //      / \
  //     2   3
  //    /   / \
  //   4   5    6

  ///              1
  //              / \
  //             2   3
  //                / \
  //               5    6
  //              / \  
  //             7   8 

