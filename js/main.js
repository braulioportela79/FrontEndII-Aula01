// for
console.log('********');
console.log('for loop');
console.log('********');
const array = [1, 2, 4, 8];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    console.log(sum += array[i]);
};

// reduce
console.log('******');
console.log('reduce');
console.log('******');
array.reduce((acc, cur) => {
    console.log(acc + cur);
    return acc += cur;
}, 0);