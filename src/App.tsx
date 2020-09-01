import React from 'react';
import './App.css';
import Accordion from "./components/Acccordion/Accordion";
import {Rating} from "./components/Rating/Rating";


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


function AppTitle() {
    console.log("AppTitle rendering");

    return (
        <>This is App component</>
    )
}




export default App;
