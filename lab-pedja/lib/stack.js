'use strict';

class Stack{
  constructor(){
    this._data = [];
  }
  add(value){
    this._data.push(value);
  }
  remove(){
    return this._data.pop();
  }
  getLenght(){
    return this._data.length;
  }
}

module.exports = Stack;