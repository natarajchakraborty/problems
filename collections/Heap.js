class Heap {
    constructor(values, equals, compare) {
        this.contentEquals = equals || Object.equals;
        this.contentCompare = compare || Object.compare;
        this.content = [];
        this.length = 0;
        values.forEach(element => {
            this.add(element);
        });
    }

    constructClone(values) {
        return new this.constructor(
            values,
            this.contentEquals,
            this.contentCompare
        );
    }

    push(value) {
        this.content.push(value);
        this.float(this.content.length - 1);
        this.length++;
    }

    pop() {
        // Store the first value so we can return it later.  This will leave a gap
        // at index 0 that must be filled.
        var result = this.content[0];
        // Remove the value at the end of the array.  The value most be removed
        // from the end to preserve the completness of the tree, despite that the
        // last child is also among the most likely to need to sink back to the
        // bottom.
        var top = this.content.pop();
        // If there are any values remaining, put the last value on the top and
        // let it sink back down.
        if (this.content.length > 0) {
            this.content[0] = top;
            this.sink(0);
        }
        this.length--;
        return result;
    }

    add(value) {
        this.push(value);
    }

    indexOf(value) {
        for (var index = 0; index < this.length; index++) {
            if (this.contentEquals(this.content[index], value)) {
                return index;
            }
        }
        return -1;
    }

    delete(value, equals) {
        if (equals) {
            throw new Error("Heap#delete does not support second argument: equals");
        }
        var index = this.indexOf(value);
        if (index === -1)
            return false;
        var top = this.content.pop();
        this.length = this.content.length;
        if (index === this.content.length)
            return true;
        this.content[index] = top;
        var comparison = this.contentCompare(top, value);
        if (comparison > 0) {
            this.float(index);
        } else if (comparison < 0) {
            this.sink(index);
        }
        return true;
    }

    peek() {
        if (this.length) {
            return this.content[0];
        }
    }

    float(index) {
        // Grab the value that is being adjusted
        var value = this.content[index];
        // A value can go no higher that the top: index 0
        while (index > 0) {
            // Compute the parent value's index and fetch it
            var parentIndex = Math.floor((index + 1) / 2) - 1;
            var parent = this.content[parentIndex];
            // If the parent is less than it
            if (this.contentCompare(parent, value) < 0) {
                this.content[parentIndex] = value;
                this.content[index]  = parent;
            } else {
                // Stop propagating if the parent is greater than the value.
                break;
            }
            // Proceed upward
            index = parentIndex;
        }
    }

    sink(index) {
        // Moves a value downward until it is greater than its children.
        var length = this.content.length;
        var value = this.content[index];
        var left, right, leftIndex, rightIndex, swapIndex, needsSwap;
    
        while (true) {
            // Invariant: the value is at index.
            // Variant: the index proceedes down the tree.
    
            // Compute the indicies of the children.
            rightIndex = (index + 1) * 2;
            leftIndex = rightIndex - 1;
    
            // If the left child exists, determine whether it is greater than the
            // parent (value) and thus whether it can be floated upward.
            needsSwap = false;
            if (leftIndex < length) {
                // Look it up and compare it.
                var left = this.content[leftIndex];
                var comparison = this.contentCompare(left, value);
                // If the child is greater than the parent, it can be floated.
                if (comparison > 0) {
                    swapIndex = leftIndex;
                    needsSwap = true;
                }
            }
    
            // If the right child exists, determine whether it is greater than the
            // parent (value), or even greater than the left child.
            if (rightIndex < length) {
                var right = this.content[rightIndex];
                var comparison = this.contentCompare(right, needsSwap ? left : value);
                if (comparison > 0) {
                    swapIndex = rightIndex;
                    needsSwap = true;
                }
            }
    
            // if there is a child that is less than the value, float the child and
            // sink the value.
            if (needsSwap) {
                this.content[index]  = this.content[swapIndex];
                this.content[swapIndex] = value;
                index = swapIndex;
                // and continue sinking
            } else {
                // if the children are both less than the value
                break;
            }
    
        }
    
    }

    clear() {
        this.content.clear();
        this.length = 0;
    }
}

exports.Heap = Heap;