// Импортируем
import { useState, useMemo, useEffect } from "react";
import { slowFunction } from "./utils";
import "../styles.css";

/** Пример тяжелых вычислений */
const ComponentB = ({ count, count2 }) => {
  const startTime = performance.now();
  /* Наша тяжелая ф-я подсчетов */
  const value = slowFunction();
  const finishTime = performance.now();

  return (
    <div className="component">
      <h3>Component B</h3>
      <p>{`Sum salary: ${value.fullSalary} ₽`}</p>
      <p>{`Max salary: ${value.maxElement.name}  ${value.maxElement.salary} ₽`}</p>
      <p>{`Min salary: ${value.minElement.name}  ${value.minElement.salary} ₽`}</p>
      <p>{`Top 5 Max salary: ${value.formattedSsortedDownArray}`}</p>
      <p>{`Top 5 Min salary: ${value.formattedSortedUpArray}`}</p>
      <p>{`Код выполнился за ${finishTime - startTime} миллисекунд`}</p>
      <p>{`State Count: ${count}`}</p>
      <p>{`State Count: ${count2}`}</p>
    </div>
  );
};

const ComponentA = () => {
  /* Устанавливаем стейт счетчика */
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);

  /* Ф-я инкрементирует count */
  const onClick = () => setCount((currentCount) => currentCount + 1);
  /* Ф-я инкрементирует count */
  const onClick2 = () => setCount2((currentCount) => currentCount + 1);

  return (
    <div className="component">
      <h3>Component A</h3>
      <button className="button" onClick={onClick}>
        Update count 1
      </button>
      <button className="button" onClick={onClick2}>
        Update count 2
      </button>
      <ComponentB count={count} count2={count2} />
    </div>
  );
};

export { ComponentA };
