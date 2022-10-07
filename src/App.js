import Header from './components/Header/Header';
import Cart from "./components/Cart/Cart";
import { useState } from 'react';
import Calculation from './components/Calculation/Calculation';
import Question from './components/Header/QuestionAnswer/Question';
let data = require("./components/Cart/Data.json")
function App() {
  const [exerciseTime, setExerciseTime] = useState(0)
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 ">
          <Header></Header>
            <div className="row">
                            {
                                data.map((cart, index) =>
                                    <Cart key={index} data={cart} setExerciseTime={setExerciseTime} />
                                )
                            }
                        </div>
          </div>
          <div className="col-md-4">
          <Calculation exerciseTime={exerciseTime}/>
          </div>
        </div>
        
        <Question></Question>
        
        
      </div>
    </div>
  );
}

export default App;
