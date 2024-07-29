// import {  } from 'react';


// const testFuncMemo = useMemo(() => () => (10), []);
//
// const testFuncCallback = useCallback(() => (10), []);
//
//
//
// testFuncMemo  testFuncCallback

//// Memo и Props
//     const testProp = useMemo(() => () => (10), [])

// const slowFunction = (value) => {
//     // здесь может быть долгий и трудоемкий код
//     return value * 2;
// }
//
// const MyComponent = ({ data }) => {
//
//     console.time('start');
//     // здесь может быть долгий и трудоемкий код
//     const slowValue = slowFunction(data);
//     console.timeEnd('end');
//
//     return (
//         <div>
//             <p>Значение: {slowValue}</p>
//         </div>
//     );
// }
