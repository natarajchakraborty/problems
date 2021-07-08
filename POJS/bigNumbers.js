// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(numstr1, numstr2){
    const lengthNum1 = numstr1.length;
    const lengthNum2 = numstr2.length;
    const diffLen = Math.abs(lengthNum1 - lengthNum2);

    let carryOver = 0; 
    let i = Math.max(lengthNum1 - 1, lengthNum2 - 1);
    const result = [];
    while(i >= 0 || (i === -1 && carryOver > 0)) {
        if(i >= 0) {
            let num1;
            let num2;
            if(lengthNum1 > lengthNum2) {
                num1 = numstr1[i];
                if(i - diffLen >= 0){
                    num2 = numstr2[i - diffLen];
                } else {
                    num2 = "0";
                }
            } else {
                if(i - diffLen >= 0){
                    num1 = numstr1[i - diffLen];
                } else {
                    num1 = "0";
                }
                num2 = numstr2[i];
            }
            const added = parseInt(num1) + parseInt(num2) + carryOver;
            if(added > 9) {
                const digit = added % 10;
                carryOver =  Math.floor( added / 10);
                result.push(digit);
            } else {
                carryOver = 0;
                result.push(added);
            }
            i--;
        } else {
            for(let c = carryOver.toString().length - 1; c >= 0; c--){
                result.push(carryOver.toString()[c]);
            }
            carryOver = 0;
        }
    }
    const final = result.reverse();
    return final.join("");
}

const res = add("098093483204829034384792874348", "98739874298379983982948792834793874979328749327493287498324793247982347987");
console.log(res);