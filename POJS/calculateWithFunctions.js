/// Requirements:
//
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
//
//

let stack;

let evalStack = () => {
  let toret;
  if (stack.length === 3) {
    switch (stack[1]) {
      case "+": {
        toret = stack[2] + stack[0];
        break;
      }
      case "-": {
        toret = stack[2] - stack[0];
        break;
      }
      case "*": {
        toret = stack[2] * stack[0];
        break;
      }
      case "/": {
        toret = Math.floor(stack[2] / stack[0]);
        break;
      }
    }
  } else if (stack.length === 2) {
    toret = stack[0];
  } else if (stack.length === 1) {
    toret = stack[0];
  }

  return toret;
};

// numbers

let zero = (prefix) => {
  if (prefix === undefined) {
    stack = [];
  }
  stack.push(0);
  return evalStack();
};

let one = (prefix) => {
  if (prefix === undefined) {
    stack = [];
  }
  if (prefix === undefined) {
    stack = [];
  }
  stack.push(1);
  return evalStack();
};

let two = (prefix) => {
  if (prefix === undefined) {
    stack = [];
  }
  stack.push(2);
  return evalStack();
};

let three = (prefix) => {
  if (prefix === undefined) {
    stack = [];
  }
  stack.push(3);
  return evalStack();
};

let four = (prefix) => {
  if (prefix === undefined) {
    stack = [];
  }
  stack.push(4);
  return evalStack();
};

let five = (prefix) => {
  if (prefix === undefined) {
    stack = [];
  }
  stack.push(5);
  return evalStack();
};

let six = (prefix) => {
  if (prefix === undefined) {
    stack = [];
  }
  stack.push(6);
  return evalStack();
};

let seven = (prefix) => {
  if (prefix === undefined) {
    stack = [];
  }
  stack.push(7);
  return evalStack();
};

let eight = (prefix) => {
  if (prefix === undefined) {
    stack = [];
  }
  stack.push(8);
  return evalStack();
};

let nine = (prefix) => {
  if (prefix === undefined) {
    stack = [];
  }
  stack.push(9);
  return evalStack();
};

// operators

let plus = (prefix) => {
  if (prefix === undefined) {
    stack = [];
  }
  stack.push("+");
  return evalStack();
};

let minus = (prefix) => {
  if (prefix === undefined) {
    stack = [];
  }
  stack.push("-");
  return evalStack();
};

let times = (prefix) => {
  if (prefix === undefined) {
    stack = [];
  }
  stack.push("*");
  return evalStack();
};

let dividedBy = (prefix) => {
  if (prefix === undefined) {
    stack = [];
  }
  stack.push("/");
  return evalStack();
};

//tests

console.log(three(plus(zero())));
console.log(eight(dividedBy(three())));


/// better solution using currying

/*
function zero(func)   { return func ? func(0) : 0; };
function one(func)    { return func ? func(1) : 1; };
function two(func)    { return func ? func(2) : 2; };
function three(func)  { return func ? func(3) : 3; };
function four(func)   { return func ? func(4) : 4; };
function five(func)   { return func ? func(5) : 5; };
function six(func)    { return func ? func(6) : 6; };
function seven(func)  { return func ? func(7) : 7; };
function eight(func)  { return func ? func(8) : 8; };
function nine(func)   { return func ? func(9) : 9; };

function plus( b )      { return function( a ) { return a + b; }; };
function minus( b )     { return function( a ) { return a - b; }; };
function times( b )     { return function( a ) { return a * b; }; };
function dividedBy( b ) { return function( a ) { return a / b; }; };
*/

