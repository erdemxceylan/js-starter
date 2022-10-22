// const sum = (a, b, c) => {
//    console.log(c);
//    return a + b + c;
// };
// console.log(sum(10, 20));
// console.log(sum(10, 20, null));
// console.log(+null);
// console.log(1 + null);
// console.log(+undefined);
// console.log(1 + undefined);

const sum = (...nums) => nums.reduce((a, b) => a + b);
const sum2 = (nums) => nums.reduce((a, b) => a + b);
const sum3 = (num1, num2, ...nums) => num1 + num2 + nums.reduce((a, b) => a + b);

console.log(sum(1, 2, 3, 4));
console.log(sum2([1, 2, 3, 4]));
console.log(sum3(1, 2, 3, 4));

const sayMyName = (...letters) => {
   console.log(letters);
   letters.forEach(char => console.log(char));
};

sayMyName('Erdem');
sayMyName(...'Erdem');
// sayMyName(...{ name: 'Erdem', surname: 'Ceylan' }); // TypeError: Found non-callable @@iterator
console.log({ name: 'Erdem', surname: 'Ceylan' });
console.log({ ...{ name: 'Erdem', surname: 'Ceylan' } });
console.log(Object.values({ name: 'Erdem', surname: 'Ceylan' }));
console.log(...Object.values({ name: 'Erdem', surname: 'Ceylan' }));
sayMyName(...Object.values({ name: 'Erdem', surname: 'Ceylan' }));

export const sizCevapVerin = () => [10, 20, 30, 40, 50];