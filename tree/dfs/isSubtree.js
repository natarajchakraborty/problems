const test = require('./test-12'); 

function isSubtree(t1, t2) {
    return searchHeadInFirstTree(t1, t2);
}

const searchHeadInFirstTree = (t1, t2) => {
    if (t1 === null && t2 === null)
        return true;

    if (t2 === null && t1)
        return true;

    if (t1 === null && t2)
        return false;

    if (t1.value === t2.value) {
        if(isEqual(t1, t2)) {
            return true;
        } 
    }

    // search in left subtree
    let left = searchHeadInFirstTree(t1.left, t2);
   
    // else search in right subtree
    return left || searchHeadInFirstTree(t1.right, t2);
}

const isEqual = (t1, t2) => {
    // search in left subtree
    if(t1 === null && t2 === null) {
        return true;
    } else if(!t1 && t2){
        return false;
    } else if(t1 && !t2) {
        return false;
    } else if(t1 && t2 && t1.value != t2.value ) {
        return false;
    }

     let left = isEqual(t1.left, t2.left);

    // else search in right subtree
    return left && isEqual(t1.right, t2.right);
}

const t1 = {
    "value": 5,
    "left": {
        "value": 10,
        "left": {
            "value": 4,
            "left": {
                "value": 1,
                "left": null,
                "right": null
            },
            "right": {
                "value": 2,
                "left": null,
                "right": null
            }
        },
        "right": {
            "value": 6,
            "left": null,
            "right": {
                "value": -1,
                "left": null,
                "right": null
            }
        }
    },
    "right": {
        "value": 7,
        "left": null,
        "right": null
    }
};

const t2 = {
    "value": 10,
    "left": {
        "value": 4,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 6,
        "left": null,
        "right": {
            "value": -1,
            "left": null,
            "right": null
        }
    }
};

const t11 = {
    "value": 5,
    "left": {
        "value": 10,
        "left": {
            "value": 4,
            "left": {
                "value": 1,
                "left": null,
                "right": null
            },
            "right": {
                "value": 2,
                "left": null,
                "right": null
            }
        },
        "right": {
            "value": 6,
            "left": {
                "value": -1,
                "left": null,
                "right": null
            },
            "right": null
        }
    },
    "right": {
        "value": 7,
        "left": null,
        "right": null
    }
};

const t22 = {
    "value": 10,
    "left": {
        "value": 4,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 6,
        "left": null,
        "right": {
            "value": -1,
            "left": null,
            "right": null
        }
    }
};


const t13 =
{
    "value": 1,
    "left": {
        "value": 2,
        "left": null,
        "right": null
    },
    "right": {
        "value": 2,
        "left": null,
        "right": null
    }
}

const t23 = null

console.log(isSubtree(t13, t23));