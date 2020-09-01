import React from 'react';
import './App.css';
import Accordion from "./components/Acccordion/Accordion";


function hello() {
    debugger;
    alert("Hello it-kamasutra")
}

//hello();

// function declaration - ми будемо використовувати для обявления компонент
function App() {
    console.log("App rendering")

    // ми здесь должни делать штото полезное
    //  и в конце функция обязана вернуть JSX
    //бейбел траспілятор перетворює JSX в обичний JS код

    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
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


function Rating() {
    console.log("Rating rendering");
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

function Star() {
    console.log("Start rendering")
    return (
        <div>star</div>
    )
}

function AppTitle() {
    console.log("AppTitle rendering");

    return (
        <>This is App component</>
    )
}




export default App;
