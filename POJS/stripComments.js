function solution(input, markers) {
    let o = "";
    let newLine = '\n';
    for(let i = 0 ; i < input.length ; i++) {
      if(markers.includes(input[i])){
        while(input[i] !== newLine && i < input.length) {
          i++;
        }
        if(o.length > 0) {
          if(o[o.length - 1] === ' '){
              o = o.slice(0, -1);
          }
          o = o + newLine;
        }
      } else {
        o = o + input[i];
      }
    }
    if(o[o.length - 1] === newLine){
        o = o.slice(0, -1);
    }
    return o;
  };


  console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]));
  console.log(solution("Q @b\nu\ne -e f g", ["@", "-"]));
