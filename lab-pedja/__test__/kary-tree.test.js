'use strict';

const KAryTree = require('../lib/kary-tree');

let one = new KAryTree(1);
let two = new KAryTree(2);
let three = new KAryTree(3);
let four = new KAryTree(4);
let five = new KAryTree(5);
let six = new KAryTree(6);
let seven = new KAryTree(7);
let eight = new KAryTree(8);

one.appendChild(two);
one.appendChild(three);
one.appendChild(four);

three.appendChild(five);
three.appendChild(six);
three.appendChild(seven);

six.appendChild(eight);

describe('kary-tree.js', () => {
  // appendChild testing
  test('APPEND_CHILD method should insert new node into K-ary tree', () => {
    expect(one.value).toEqual(1);
    expect(one._children[0].value).toEqual(2);
    expect(one._children[1].value).toEqual(3);
    expect(one._children[2].value).toEqual(4);
    expect(one._children[1]._children[0].value).toEqual(5);
    expect(one._children[1]._children[1].value).toEqual(6);
    expect(one._children[1]._children[2].value).toEqual(7);
    expect(one._children[1]._children[1]._children[0].value).toEqual(8);
  });

  // FIND testing
  test('FIND method should return first node that has that value', () => {
    expect(one.find(8)).toEqual(8);
    expect(one.find(6)).toEqual(6);
    expect(one.find(3)).toEqual(3);
  });

  test('FIND method should return NULL if value doesn\'t exist', () => {
    expect(one.find(100)).toEqual(null);
    expect(one.find('testing')).toEqual(null);    
  });

  // toString testing
  test('TOSTRING method should return node\'s concatenated values separated by newlines in to a string', () => {
    expect(one.toString('')).toEqual('1\n2\n3\n4\n5\n6\n7\n8\n');
  });

  test('TOSTRING method should throw error if value is not a string', () => {
    expect(() => one.prototype.toString(12345)).toThrow();
  });

  test('TOARRAY method should return array of values using DEPTH FIRST traverse though kary tree', () => {
    expect(one.toArray([])).toEqual([1,4,3,7,6,8,5,2]);
  });

  test('TOARRAY method should throw an error if array is not provided', () => {
    expect(() => one.toArray('testing')).toThrow();
  });

});