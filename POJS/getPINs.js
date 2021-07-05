function getPINs(observedPin) {

    const keyPadLayout = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
        ["X", "0", "X"]
      ];

    const getNeighbours = (digit) => {
        let foundX = -1;
        let foundY = -1;
        for(let i = 0; i < 4; i++) {
            for(let j = 0; j < 3; j++) {
                if(keyPadLayout[i][j] === digit){
                    foundX = i;
                    foundY = j;
                    break;
                }
            }
            if(foundX > -1 && foundY > -1){
                break;
            }
        }

        const neighbours = [];
        neighbours.push(keyPadLayout[foundX][foundY]);
        foundX > 0 && neighbours.push(keyPadLayout[foundX - 1][foundY]);
        foundY > 0 && neighbours.push(keyPadLayout[foundX][foundY - 1]);
        foundX < 3 && neighbours.push(keyPadLayout[foundX + 1][foundY]);
        foundY < 2 && neighbours.push(keyPadLayout[foundX][foundY + 1]);
        return neighbours.filter(x => x !== 'X');
    }

    const allNeightbours = [];

    for(let i = 0 ; i < observedPin.length; i++) {
        allNeightbours.push(getNeighbours(observedPin[i]));
    }


    const permutate = (neighbours) => {
        if(neighbours.length === 0) return [];
        if(neighbours.length === 1) return [...neighbours[0]];

        const firstElNeighbours = neighbours[0];
        const rest = neighbours.slice(1);
        
        const permutationWithoutFirstNeighbour = permutate(rest);

        const allPermutations = [];

        firstElNeighbours.forEach(firstElement => (
            permutationWithoutFirstNeighbour.forEach(perm => {
                // for(let i = 0; i<= perm.length; i++) {
                //     const permutationWithFirst = [...perm.slice(0, i), firstElement, ...perm.slice(i)];
                //     allPermutations.push(permutationWithFirst);
                // }
                const permutationWithFirst = [firstElement, ...perm];
                allPermutations.push(permutationWithFirst);
            })
        ));

        return allPermutations;
    }
    
    const allPossiblePins = permutate(allNeightbours);
    if(observedPin.length === 1) {
        return allPossiblePins;
    }
    const strings = [];
    allPossiblePins.forEach(x => strings.push(x.join('')));
    const pins = new Set(strings);
    return [...pins];
}

console.log(getPINs("11"));