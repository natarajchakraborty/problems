function firstNonRepeatingLetter(s) {
    const hashMap = {};
    if(!s){
        return '';
    }


    for(let i = 0; i< s.length; i++) {
        if(!hashMap[s[i].toLowerCase()]){
            hashMap[s[i].toLowerCase()] = {
                index: i,
                count: 1
            }
        } else {
            hashMap[s[i].toLowerCase()] = {
                ...hashMap[s[i].toLowerCase()],
                count: hashMap[s[i].toLowerCase()].count + 1
            }
        }
    } 

    if(s.length > 1 && Object.keys(hashMap).length === 1){
        return '';
    }

    const sorted = Object.keys(hashMap).filter(a => hashMap[a].count === 1).sort((a,b) => hashMap[a].index - hashMap[b].index);
    return sorted.length ? s[hashMap[sorted[0]].index]: '';
  }

  //console.log(firstNonRepeatingLetter('a'));
  //console.log(firstNonRepeatingLetter('stress'));
  console.log(firstNonRepeatingLetter('abba'));