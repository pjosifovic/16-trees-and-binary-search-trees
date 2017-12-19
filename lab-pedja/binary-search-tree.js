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


BinarySearchTree.prototype.remove = function(value){
  // TODO add what if value is not found in BST

  if(value < this.value){
    this.left = this.left && this.left.remove(value);
  } else if (value > this.value){
    this.right = this.right && this.right.remove(value);
  } else if (this.left && this.right) {
    this.value = this.right.findMinValue();
    this.right = this.right.remove(this.value);
  } else {
    return this.left || this.right;
  }
  return this;
};

BinarySearchTree.prototype.findMinValue = function(){
  return this.left ? this.left.findMinValue() : this.value;
};

module.exports = BinarySearchTree;