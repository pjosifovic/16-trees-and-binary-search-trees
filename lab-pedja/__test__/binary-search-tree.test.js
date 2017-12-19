'use strict';

const BinarySearchTree = require('../binary-search-tree');

let bst = new BinarySearchTree(10);
bst.insert(5);
bst.insert(2);
bst.insert(8);
bst.insert(12);
bst.insert(16);

describe('binary-search-tree.js', () => {
  // INSERT testing
  test('INSERT method should insert new node into BST', () => {
    expect(bst.right.value).toEqual(12);
    expect(bst.left.value).toEqual(5);
    expect(bst.left.right.value).toEqual(8);    
  });
  test('INSERT method should return throw an error if value already exist', () => {
    expect(()=> {bst.insert(8);}).toThrow();
  });
  test('INSERT method should return an error is passed in value is not a number', () => {
    expect(()=> {bst.insert('testing');}).toThrow();
  });

  // FIND testing
  test('FIND method should return value of a node if bst contains that node value', () => {
    expect(bst.find(8).value).toEqual(8);
    expect(bst.find(16).value).toEqual(16);    
  });
  test('FIND method should return NULL if value doesn\'t exist', () => {
    expect(bst.find(100)).toEqual(null);
  });

  // REMOVE testing
  test('REMOVE method should remove a node with a value passed in', () => {
    bst.remove(5);
    expect(bst.left.right).toEqual(null);
    expect(bst.left.value).toEqual(8);
    expect(bst.left.left.value).toEqual(2);
  });
  test('REMOVE method should remove root node and assing new root as smallest on the right side', () => {
    bst.remove(10);
    expect(bst.value).toEqual(12);
    expect(bst.right.value).toEqual(16);
  });
});