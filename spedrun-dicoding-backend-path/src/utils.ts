const splitString = (str: string): string[] => {
  return str.split("");
};

const unique = (arr: string[]): string[] => {
  return [...new Set(arr)];
};

export { splitString, unique };
