'use strict';

let global = '<3';

function funk(parameter) {
  global = `${global} jazzy`;
  return `${global} ${parameter}`;
}

const jazzReturn1 = funk('hello');
const jazz1 = jazzReturn1 === global+' hello';
console.assert(jazz1, 'Test 1: jazz');

global = `${global}!`;

const jazzReturn2 = funk('boat');
const jazz2 = jazzReturn2 === global+ ' boat';
console.assert(jazz2, 'Test 2: jazz');

global = ':(';

const jazzReturn3 = funk('tree');
const jazz3 = jazzReturn3 === global+' tree';
console.assert(jazz3, 'Test 3: jazz');
