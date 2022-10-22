const nums = [1, 2, [[3, 4], [5, 6], [7, 8]]];
const [first, second, [innerFirst, ...rest]] = nums;
console.log(first, second, innerFirst, rest); // nested destructuring

console.log(rest.flat());