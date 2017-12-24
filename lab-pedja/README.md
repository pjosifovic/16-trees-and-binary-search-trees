![cf](http://i.imgur.com/7v5ASc8.png) Lab 16 Removing value from Binary Search Tree and K-ary tree manipulation
====

* In addition to class sample code adding and finding values in Binary Search Tree `remove` method is uncluded. 

* This lab includes creating K-ary Tree constructor and three methods `find`, `toString` and `toArray`. Goal is implementing these methods using different methods of k-ary tree traversal - breath and depth first.


.find(value) should iterate over all child nodes using an breath first traversal and return the first node that has that value, it should return null if a node with the value is not found.

.toString(str) should iterate over all child nodes using a breath-first traversal and concatenate their values separated by newlines in to a string.

.toArray(array) should use a depth-first and push all the tree node's values into an array.

  * find(breath-first)
  * toString(breath-first)
  * toArray(depth-first)

## Code Style
* Vanilla Javascript and Jest for testing


## Tech / framework used

* [npm package jest](http://facebook.github.io/jest/) used for TDD



## Installation and How To Use

  * Fork || clone this repo to you computer.

  * Run `npm install`

  * To run tests run `npm test` command.


## KAryTree

`.find()` method takes a value, goes through binary search tree and if entered value is found it returns node with that value. It searches using **breath-first traversal**.

  * Space: 0(n) where n is number on nodes in binary search tree.
  * Time: 0(n) where n is number on nodes in binary search tree.

`.toString()` method takes a string value, traverses through binary search tree using **breath-first traversal** method and take every node's value and concat's it to our argument. Passed in argument has to be a string or it will return null. 
 
  * Space: 0(n) where n is number on nodes in binary search tree.
  * Time: 0(n) where n is number on nodes in binary search tree.

`.toArray()` method takes a array as a value, traverses through binary search tree using **depth-first traversal** and takes every node's value and adds it to argument array.

  * Space: 0(n) where n is number on nodes in binary search tree.
  * Time: 0(n) where n is number on nodes in binary search tree.

`.breathFirstTraversal()`
  * Space: 0(h) where h is height of the tree.
  * Time: 0(n) where n is number on nodes in binary search tree.

## BinarySearchTree

`.remove()`
  * Space: 0(1) constant 
  * Time: 0(h) where h is height of the tree.

## Licence
MIT © Pedja Josifovic
