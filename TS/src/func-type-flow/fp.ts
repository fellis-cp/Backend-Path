const my: string[] = ["hanif", "fajar", "anggara"];

const myName: string[] = my.map((my) => {
  return `${my}!`;
});

console.log(myName);

//impure func ex
let count: number = 0;
const addWith = (num: number): number => {
  count = count + num;
  return count;
};

//pure func
const PaddWith = (count: number = 0, adder: number): number => {
  return count + adder;
};

//impure
const getTimeComponents = (date: Date) => {
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
};

//HOF
type AddFunc = (num: number[]) => number;

// Implementation of the AddFunc type
const add = (numbers: number[]): number => {
  return numbers.reduce((sum, num) => sum + num, 0);
};

const sum = (add: AddFunc, arg: number[]): number => {
  return add(arg);
};

// Example usage
console.log(sum(add, [1, 2, 3, 4]));
