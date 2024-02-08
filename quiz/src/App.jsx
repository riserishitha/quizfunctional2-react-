import Quizpage from "./components/quizfunctional";
import Arr from "./resources/quizQuestion";
import "./App.css";
const App = () => {
  return (
    <div>
      <Quizpage Data={Arr} />
    </div>
  );
};

export default App;
