import { salaryList } from "./stubs";

/* Сумма */
function sumOfArrays(arrays, count) {
  const sum = arrays.reduce((acc, val) => acc + val.salary, 0);
  return sum * count;
}

/* Приведение к списку строк и цены */
function formattedData(arr) {
  return arr.map((item) => {
    const name = item.name;
    const salary = item.salary;
    const rubles = `${salary}₽`;
    return ` ${name} ${rubles}`;
  });
}

/* Сортировка */
function sortArray({ arr, isUp, count }) {
  return arr
    .map((item, index) => ({ ...item, index }))
    .sort((a, b) =>
      isUp ? a.salary - b.salary : b.salary - a.salary || a.index - b.index,
    )
    .map(({ index, ...item }) => ({ ...item, salary: item.salary * count }));
}

/* Наша тяжелая ф-я подсчетов */
export const slowFunction = (count = 1) => {
  const fullSalary = sumOfArrays(salaryList, count);
  const maxElement = salaryList.reduce((acc, val) =>
    acc.salary > val.salary ? acc : val,
  );
  const minElement = salaryList.reduce((acc, val) =>
    acc.salary < val.salary ? acc : val,
  );
  const formattedSortedUpArray = formattedData(
    sortArray({ arr: salaryList, isUp: true, count }).slice(0, 5),
  );
  const formattedSsortedDownArray = formattedData(
    sortArray({ arr: salaryList, isUp: false, count }).slice(0, 5),
  );

  return {
    fullSalary,
    maxElement,
    minElement,
    formattedSortedUpArray,
    formattedSsortedDownArray,
  };
};
