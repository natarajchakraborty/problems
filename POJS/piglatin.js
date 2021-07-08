function pigIt(str){
   const words = str.split(' ');
   const pigged = words.map(word => {
       if(![',', '?', '!', ',', ':', ';', '-', "'", '"', ']', '[', '}', '{', '(', ')', '...'].includes(word)) {
            const [first, ...rest] = [...word];
            return rest.join('') + first + "ay";
       } else {
           return word;
       }
   });
   return pigged.join(' ');
  }

  console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
  console.log(pigIt('Hello world !')); // elloHay orldway !