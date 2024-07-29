import { ComponentA } from "./components/lesson1/Components";
import "./App.css";

/** Для работы с уроком useMemo и далее импортируйте компонент А
 *  из папки lesson3
 *  import { ComponentA } from "./components/lesson3/Components"; */
const App = () => (
  <div className="app">
    <div className="wrapper">
      <h1>APP</h1>
      <ComponentA />
    </div>
  </div>
);

export default App;
