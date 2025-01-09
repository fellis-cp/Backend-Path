const generateNumArray = (n: number): number[] => {
  //check kondisi agar tidak terjadi stackoverflow
  if (n < 0) {
    return [];
  }

  return [...generateNumArray(n - 1), n];
};

console.log(generateNumArray(5));

// standard arr usage

const genNumArrSimple = (n: number): number[] => {
  let arr: number[] = [];
  for (let index = 0; index <= n; index = index + 1) {
    arr.push(index);
  }

  return arr;
};

console.log(genNumArrSimple(5));
