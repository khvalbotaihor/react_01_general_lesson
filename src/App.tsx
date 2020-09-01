import React from 'react';
import './App.css';
import Accordion from "./components/Acccordion/Accordion";
import {Rating} from "./components/Rating/Rating";


function sum(a:number,b:number) {
    alert(a+b)
}

/*sum(3,4);
sum(100,333);*/

// function declaration - ми будемо використовувати для обявления компонент
function App() {
    console.log("App rendering")

    // ми здесь должни делать штото полезное
    //  и в конце функция обязана вернуть JSX
    //бейбел траспілятор перетворює JSX в обичний JS код

    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion title={"first title"}/>
            <Accordion title={"second title"}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}


function PageTitle(props:any) {
    debugger;
    console.log("PageTitle rendering");

    return (
        <h1>{props.title}</h1>
    )
}




export default App;
