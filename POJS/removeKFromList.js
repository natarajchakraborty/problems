function removeKFromList(l, k) {
    var tmp = l;
      
    while (l && l.value == k)
    {
        l = l.next;
    }
    while (tmp && tmp.next != null)
    {
        if (tmp.next.value == k)
        {
            tmp.next = tmp.next.next;
        }
        else
        {
            tmp = tmp.next;
        }
    }
    return !l ? [] : l;
}

console.log(removeKFromList( {
    value: 1000,
    next:  {
      value: 1000,
      next: null,
    },
  }, 1000)); // []


console.log(removeKFromList( {
    value: 3,
    next:  {
      value: 1,
      next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null,
                  },
              },
          },
      },
    },
}, 3)); // [1, 2, 4, 5]

console.log(removeKFromList( {
    value: 1,
    next:  {
      value: 2,
      next: {
        value: 3,
        next: {
            value: 4,
            next: {
                value: 5,
                next: {
                    value: 6,
                    next: {
                        value: 7,
                        next: null,
                      },
                  },
              },
          },
      },
    },
}, 10)); // [1, 2, 3, 4, 5, 6, 7]

console.log(removeKFromList( [], -1000)); // []

console.log(removeKFromList( {
    value: 123,
    next:  {
      value: 456,
      next: {
        value: 789,
        next: {
            value: 0,
            next: null,
          },
      },
    },
}, 0)); // [123, 456, 789]
