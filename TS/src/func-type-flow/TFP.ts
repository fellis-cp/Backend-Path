//pure func

type _PersonYT = {
  name: string;
  age?: number;
};

const person1: _PersonYT = {
  name: "hanif",
};

const addAge = (person: _PersonYT, age: number) => {
  person.age = age;
  return person;
};

const updatedPerson = addAge(person1, 123);
console.log(updatedPerson);

//imutability
const person2: _PersonYT = {
  name: "husen",
  age: 20,
};

const changeAge = (person: _PersonYT, n: number): _PersonYT => {
  person.age = n;
  return person;
};

const changeAge1 = changeAge(person2, 12);
console.log(changeAge1);

//imutablity 2

const Family: string[] = ["hanif , fajar"];

const addFamMember = (family: string[], arg: string): string[] => {
  family.push(arg);
  return family;
};

const FamilyUpdated = addFamMember(Family, "tejo");
console.log(FamilyUpdated);

//recursive

const CountDown = (time: number): number => {
  console.log(time);
  if (time <= 0) {
    return 0;
  }
  return CountDown(time - 1);
};

console.log(CountDown(5));

//HOF
const hello1 = (): string => {
  return `helloworld`;
};

const saySomething = (func: () => string): string => {
  return func();
};

const helloku = saySomething(() => hello1());
console.log(helloku);
