'use strict';

const BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;

};

BinarySearchTree.prototype.insert = function(value) {
  if(typeof value !== 'number')
    throw new TypeError('Binary Search Tree - value should be a number');

  if(this.value === value)
    throw new Error('Binary Search Tree - value is already present');

  if(value < this.value){
    if(!this.left){
      this.left = new BinarySearchTree(value);
      return;
    }
    this.left.insert(value); // vinicio - recursive call
    return;
  }
  if(!this.right){
    this.right = new BinarySearchTree(value);
    return;
  }
  this.right.insert(value);
  return;
};

BinarySearchTree.prototype.find = function(value){
  if(value === this.value)
    return this;
  if(value > this.value){
    if(this.right !== null)
      return this.right.find(value);
    else 
      return null;
  }
  if(this.left !== null) 
    return this.left.find(value);
  else 
    return null;
};

// TODO write .remove

BinarySearchTree.prototype.remove = function(value){

}

module.exports = BinarySearchTree;