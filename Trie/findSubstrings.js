class TrieNode {
    constructor(){
      this.is_terminal = false;
      this.links = {};
    }
};

function findSubstrings(words, parts){
    const root = new TrieNode();

    const  addWord = (word) => {
        let current = root;
        // banana
        for(const c of word) {
            if(!current.links[c]) current.links[c] = new TrieNode();
            current = current.links[c];
        }
        current.is_terminal = true;
    }

    const findSubstringInWord = (word, root) => {
        let lenLongSubstr = 0; 
        let longestPos = 0;
        for(let startpos = 0 ; startpos < word.length; startpos++){
            let current = root;
            for(let i = startpos; i < word.length; i++) {
                const char = word[i];
                if(!current.links[char]) {
                    break;
                }
                current = current.links[char];
                const length = i - startpos + 1;
                if(current.is_terminal && length > lenLongSubstr) {
                    lenLongSubstr = length;
                    longestPos = startpos;
                }
            }
        }
        if(!lenLongSubstr) {
            return word;
        }
        let end = longestPos + lenLongSubstr;
        return word.slice(0, longestPos) + '[' + word.slice(longestPos, end) + ']' + word.slice(end, word.length)
    }

    for(const p of parts) {
        addWord(p);
    }
    
    return words.map(word => findSubstringInWord(word, root));
}

console.log(findSubstrings(["Apple", "Melon", "Orange", "Watermelon"], ["a", "mel", "lon", "el", "An"]));