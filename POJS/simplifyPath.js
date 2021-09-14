function simplifyPath(path) {
    const shortened = [];
    let splits = path.split('/');
    splits = splits.filter(x => x !== '');
    splits.forEach((element, i) => {
        if(element === ".."){
            shortened.pop();
        } else if(element != "." || element === "/"){
            shortened.push(`/${element}`);
        }
    });
    if(shortened.length === 0 ){
        return '/'
    }
    return shortened.join('');
}


console.log(simplifyPath("/home/a/./x/../b//c/"));