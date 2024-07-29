/* Создает упорядоченный массив */
const createArray = (count) => new Array(count).fill().map((_, i) => i + 1);

/* Для ComponentCList */
export const list = createArray(50000);

/* Для slowFunction урок из первых уроков */
export const arr1 = createArray(1000);
export const arr2 = createArray(800);
export const arr3 = createArray(500);
