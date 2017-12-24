'use strict';

const Queue = require('./queue');
const Stack = require('./stack');


const KAryTree = function(value){
  this.value = value;
  this._children = [];
};

KAryTree.prototype.appendChild = function(tree){
  if(!(tree instanceof KAryTree))
    throw new TypeError('must insert a k-ary tree');

  this._children.push(tree);
};

KAryTree.prototype.breathFirstTraversal = function(){
  let queue = new Queue();
  queue.enqueue(this);

  let current = null;

  while(queue.getLenght() > 0){
    current = queue.dequeue();
    
    for(let child of current._children)
      queue.enqueue(child);
  }
}; 

// TODO find(value) should iterate over all child nodes using a breath-first traversal and return the first node that has that value, it should return null if a node with the value is not found
KAryTree.prototype.find = function(value){
  let queue = new Queue();
  queue.enqueue(this);

  let current = null;

  while(queue.getLenght() > 0){
    current = queue.dequeue();
    
    for(let child of current._children)
      queue.enqueue(child);
    if(value === current.value)
      return current.value;
  }
  return null;
};

// TODO toString(str) should iterate over all child nodes using a breath-first traversal and concatenate their values separated by newlines in to a string
KAryTree.prototype.toString = function(str){
  if(typeof str !== 'string')
    throw new TypeError('toString takes string as an argument');

  let queue = new Queue();
  queue.enqueue(this);

  let current = null;

  while(queue.getLenght() > 0){
    current = queue.dequeue();
    
    str += current.value + '\n';

    for(let child of current._children)
      queue.enqueue(child);

  }
  return str;
};

// TODO toArray(array) should use a depth-first traversal and push all the tree's elements into an array.
KAryTree.prototype.toArray = function(array){
  if(!Array.isArray(array))
    throw new TypeError(`toArray takes arg that is an array`);

  let stack = new Stack();
  stack.add(this);

  let current = null;

  while(stack.getLenght() > 0){
    current = stack.remove();
    
    array.push(current.value);

    for(let child of current._children)
      stack.add(child);
  }
  return array;
}; 

module.exports = KAryTree;