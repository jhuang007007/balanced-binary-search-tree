// /Build a Node class / factory. It should have an attribute for the data it stores as well as its left and right children.
function nodeFactory(data, left, right) {
  return {
    data,
    left,
    right
  }
}

//Build a Tree class / factory which accepts an array when initialized. The Tree class should have a root attribute which uses the return value of buildTree which you’ll write next.
function treeFactory(array) {
  let formattedArray = formatArray(array);
  console.log(formattedArray)
  let end = formattedArray.length - 1;
  let root = buildTree(formattedArray, 0, end);

  prettyPrint(root)
  return {
    root
  }
}

//Write a buildTree function which takes an array of data (e.g. [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The buildTree function should return the level-0 root node.
function buildTree(array, start, end) {
  //base case
  if (start > end) return null;

  let mid = parseInt((start + end) / 2);
  
  let root = nodeFactory(array[mid])

  root.left = buildTree(array, start, mid - 1)
  root.right = buildTree(array, mid + 1, end)

  return root;
}

function formatArray(array) {
  //remove duplicates
  let newArray = array.filter((element, index) => {
    return array.indexOf(element) === index;
  });
  
  sortedNewArray = newArray.sort((a, b) => a - b);
  return sortedNewArray; 
}

//TOP visualization helper
const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}

let testTree1 = treeFactory([1,2,3,4,5,6,7,8,9])
let testTree2 = treeFactory([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])