"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var nums = new NumbersCollection_1.NumbersCollection([50, 3, -5, 0]);
nums.sort();
console.log(nums.data);
var chars = new CharactersCollection_1.CharactersCollection("cdA");
chars.sort();
console.log(chars.data);
var list = new LinkedList_1.LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.sort();
list.print();
