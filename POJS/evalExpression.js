// /**
// * Evaluate a mathematical expression (as a string) and return the result
// * @param {String} expr A mathematical expression
// * @returns {Decimal} Result of the mathematical expression
// * @example
// *    // Returns -81.4600
// *    expr("10.04+9.5-1+-100");
// */ 
// function expr (expr) {

//     var chars = expr.split("");
//     var n = [], op = [], index = 0, oplast = true;

//     n[index] = "";

//     // Parse the expression
//     for (var c = 0; c < chars.length; c++) {
//         if(chars[c] !== ' '){
//             if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
//                 op[index] = chars[c];
//                 index++;
//                 n[index] = "";
//                 oplast = true;
//             } else {
//                 n[index] += chars[c];
//                 oplast = false;
//             }
//         }
//     }

//     const newNums = [];
//     const newOps = [];
//     // Calculate the expression * and /
//     expr = parseFloat(n[0]);
//     for (var o = 0; o < op.length; o++) {
//         var num = parseFloat(n[o + 1]);
//         if(op[o] === '/' || op[o] === "*"){
//             switch (op[o]) {
//                 case "*":
//                     expr = expr * num;
//                     newNums.push(expr);
//                     break;
//                 case "/":
//                     expr = expr / num;
//                     newNums.push(expr);
//                     break;
//             }
//         }else {
//             newOps.push(op[o]);
//             newNums.push(num);
//         }
//     }


//     return expr;
// }

// console.log(expr("2 / 2 + 3.33 * 4 - -6"));

// const convertUniraryToBinary = (op1, op2) => {
//     if(op1 == op2){
//         if(op1 === '+' && op2 === '+'){
//             return '+';
//         } else if((op1 === '-' && op2 === '-')){
//             return '+';
//         }
//     } else return '-';
// }

// const calc = (expression) => {
    
//     const original = expression.split('');
//     let tokens = [];
//     // for(let i = 0; i <  original.length - 1; i++){
//     //     if((original[i] === '+' || original[i] === '-') && ( original[i - 1] === ' ' || i === 0 ) && (!isNaN(parseInt(original[i+1])) || original[i+1] === '.')){
//     //         // we have a unirary op
//     //         if(i > 0) {
//     //             const uniraryOp = original[i];
//     //             const binaryOp = original[i - 2];
//     //             const strNum = [];
//     //             i = i + 1;
//     //             // There may be more than
//     //             // one digits in number
//     //             while (i < original.length &&
//     //                     (original[i] >= '0' &&
//     //                     original[i] <= '9') || original[i] === '.' )
//     //             {
//     //                 strNum.push(original[i++]);
//     //             }
//     //             // push to ModifiedArray
//     //             tokens.pop();
//     //             tokens.pop();
//     //             tokens.push(convertUniraryToBinary(binaryOp, uniraryOp));
//     //             tokens.push(' ');
//     //             tokens = tokens.concat(strNum);
//     //         }
//     //     } else {
//     //         tokens.push(original[i]);
//     //     }
//     // }
//     // merge tokens with unirary op
//     for(let i = 0; i <  original.length - 1; i++){

//     }

//      // Stack for numbers: 'values'
//     const values = [];

//     // Stack for Operators: 'ops'
//     const ops = [];

//     for (let i = 0; i < tokens.length; i++)
//     {
//          // Current token is a whitespace, skip it
//         if (tokens[i] == ' ')
//         {
//             continue;
//         }

//         // Current token is a number,
//         // push it to stack for numbers
//         if (tokens[i] >= '0' && tokens[i] <= '9' || tokens[i] === '.' )
//         {
//             const strNum = [];
             
//             // There may be more than
//             // one digits in number
//             while (i < tokens.length &&
//                     (tokens[i] >= '0' &&
//                         tokens[i] <= '9') || tokens[i] === '.' )
//             {
//                 strNum.push(tokens[i++]);
//             }
//             values.push(parseFloat(strNum.join('')));
           
//             // Right now the i points to
//             // the character next to the digit,
//             // since the for loop also increases
//             // the i, we would skip one
//             //  token position; we need to
//             // decrease the value of i by 1 to
//             // correct the offset.
//               i--;
//         }

//         // Current token is an opening
//         // brace, push it to 'ops'
//         else if (tokens[i] == '(')
//         {
//             ops.push(tokens[i]);
//         }

//         // Closing brace encountered,
//         // solve entire brace
//         else if (tokens[i] == ')')
//         {
//             while (ops[ops.length - 1] != '(')
//             {
//               values.push(applyOp(ops.pop(),
//                                values.pop(),
//                               values.pop()));
//             }
//             ops.pop();
//         }

//         // Current token is an operator.
//         else if (tokens[i] == '+' ||
//                  tokens[i] == '-' ||
//                  tokens[i] == '*' ||
//                  tokens[i] == '/')
//         {
             
//             // While top of 'ops' has same
//             // or greater precedence to current
//             // token, which is an operator.
//             // Apply operator on top of 'ops'
//             // to top two elements in values stack
//             while (ops.length > 0 &&
//                      hasPrecedence(tokens[i],
//                         ops[ops.length - 1]))
//             {
//               values.push(applyOp(ops.pop(),
//                                values.pop(),
//                              values.pop()));
//             }

//             // Push current token to 'ops'.
//             ops.push(tokens[i]);
//         }
//     }

//     // Entire expression has been
//     // parsed at this point, apply remaining
//     // ops to remaining values
//     while (ops.length > 0)
//     {
//         values.push(applyOp(ops.pop(),
//                          values.pop(),
//                         values.pop()));
//     }

//     // Top of 'values' contains
//     // result, return it
//     return values.pop();
// }

// // Returns true if 'op2' has
// // higher or same precedence as 'op1',
// // otherwise returns false.
// function hasPrecedence(op1, op2)
// {
//     if (op2 == '(' || op2 == ')')
//     {
//         return false;
//     }
//     if ((op1 == '*' || op1 == '/') &&
//            (op2 == '+' || op2 == '-'))
//     {
//         return false;
//     }
//     else
//     {
//         return true;
//     }
// }

// // A utility method to apply an
// // operator 'op' on operands 'a' 
// // and 'b'. Return the result.
// function applyOp(op, b, a)
// {
//     if(b && a){
//         switch (op)
//         {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//         case '/':
//             if (b == 0)
//             {
//                 throw new
//                 System.NotSupportedException(
//                        "Cannot divide by zero");
//             }
//             return a / b;
//         }
//     } else {
//         switch (op)
//         {
//         case '+':
//             return +b;
//         case '-':
//             return -b;
//         case '*':
//             throw new Exception('Not supported, * cannot be applied as unirary op');
//         case '/':
//             throw new Exception('Not supported, / cannot be applied as unirary op');
//         }
//     }
    
//     return 0;
// }

const calc = (expression) => {
    let pos = -1, ch;

    const nextChar = () => {
        ch = (++pos < expression.length) ? expression.charAt(pos) : -1;
    }
  
    const eat = (charToEat) => {
        while (ch == ' ') nextChar();
        if (ch == charToEat) {
            nextChar();
            return true;
        }
        return false;
    }

    const parseExpression = () => {
        let x = parseTerm();
        for (;;) {
            if      (eat('+')) x += parseTerm(); // addition
            else if (eat('-')) x -= parseTerm(); // subtraction
            else return x;
        }
    }

    const parseTerm = () => {
        let x = parseFactor();
        for (;;) {
            if      (eat('*')) x *= parseFactor(); // multiplication
            else if (eat('/')) x /= parseFactor(); // division
            else return x;
        }
    }

    const parseFactor = () => {
        if (eat('+')) return parseFactor();
        if (eat('-')) return -parseFactor();

        let x;
        let startPos = pos;
        if (eat('(')) { 
            x = parseExpression();
            eat(')');
        } else if ((ch >= '0' && ch <= '9') || ch == '.') { 
            while ((ch >= '0' && ch <= '9') || ch == '.') nextChar();
            x = parseFloat(expression.substring(startPos, pos));
        } else {
            throw new Exception("Unexpected: " + ch);
        }
        return x;
    }
    nextChar();
    let x = parseExpression();
    if (pos < expression.length) throw new Exception("Unexpected: " + ch);
    return x;
  };

 console.log(calc("-4 / (-6.5 + 2)"));