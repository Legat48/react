import { arr1, arr2, arr3 } from "./stubs";

export const slowFunction = () => {
  let result = 0;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      for (let k = 0; k < arr3.length; k++) {
        result += arr1[i] + arr2[j] + arr3[k];
      }
    }
  }

  return result;
};
