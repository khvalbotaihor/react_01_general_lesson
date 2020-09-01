import React from 'react';
import './App.css';


function hello(){
    debugger;
    alert("Hello it-kamasutra")
}
//hello();

// function declaration - ми будемо використовувати для обявления компонент
function App() {
    debugger;
    // ми здесь должни делать штото полезное
    //  и в конце функция обязана вернуть JSX
    //бейбел траспілятор перетворює JSX в обичний JS код

    return (
      <div>This is App component
          <Rating />
          <Accordion />
      </div>
  );
}



// function expression
const App2 = function () {
    return (
        <div className="App">
            <div>This is App component
            </div>
        </div>
    );
}

// стрелочная функция - це те з чим ми будемо працювати - це ми будемо використовувати для обработчика собитий
const App3 = () => {
    return (
        <div className="App">
            <div>This is App component</div>
        </div>
    );
}


function Rating(){
    debugger;
    return(
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    )
}

function Star(){
    return(
        <div>star</div>
    )
}

function Accordion() {
    debugger;
    return(
        <div>
        <h3>Menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;
