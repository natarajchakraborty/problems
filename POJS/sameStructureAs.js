Array.prototype.sameStructureAs = function (other) {
    if(!isArray(other)){
        return false;
    }

    const createSubStructure = (a) => {
        const structure = [];
        for(let i = 0 ; i < a.length; i++){
            if(Array.isArray(a[i])){
                structure.push({
                    index: i,
                    structure: createSubStructure(a[i]),
                    length: a[i].length
                })
            }
        }
        return structure;
    }

    const othersStructure = createSubStructure(other);
    const thisStructure = createSubStructure(this);

    const compareSubStructure = (a, b) => {
        if(a.length !== b.length) {
            return false;
        }
        for(let i = 0; i < a.length; i++){
            if(a[i].index !== b[i].index){
                return false;
            }
            if(a[i].length !== b[i].length){
                return false;
            }
            if(!compareSubStructure(a[i].structure, b[i].structure)){
                return false;
            }
        }
        return true;
    }

    return compareSubStructure(thisStructure, othersStructure);
};

//console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] ));
//console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] ));
//console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ));
//console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] ));
//console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ));
console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ));