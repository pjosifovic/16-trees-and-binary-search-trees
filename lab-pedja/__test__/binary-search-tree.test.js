'use strict';

const BinarySearchTree = require('../binary-search-tree');

let bst = new BinarySearchTree(10);
bst.insert(5);
bst.insert(2);
bst.insert(8);
bst.insert(16);

describe('binary-search-tree.js', () => {
  test('INSERT method should insert new node into BST', () => {
    expect(bst.right.value).toEqual(16);
    expect(bst.left.value).toEqual(5);
    expect(bst.left.right.value).toEqual(8);    
  });
  test('INSERT method should return throw an error if value already exist', () => {
    expect(()=> {bst.insert(8);}).toThrow();
  });
  test('INSERT method should return an error is passed in value is not a number', () => {
    expect(()=> {bst.insert('testing');}).toThrow();
  });
});