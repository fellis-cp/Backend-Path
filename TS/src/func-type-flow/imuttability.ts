const maxNum = (...n: number[]): number => {
  //kembalikan array index ke -0 setelah shorting
  return n.sort((a, b) => b - a)[0];
};

console.log(maxNum(1, 2, 3, 45));

// Method 2: Using object literal with manual property copying like class

type _Person = {
  name?: string;
  username?: string;
  email?: string;
};

const registerEmail = (person: _Person, email: string): _Person => {
  return {
    name: person.name,
    username: person.username,
    email: email,
  };
};

const akun1: _Person = {
  name: "hanif",
  username: "flo",
};

const akun1Beremail = registerEmail(akun1, "hanifanggara@");
console.log(akun1Beremail);
