import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Acccordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from '../src/components/OnOff/OnOff'
import {UncontrolledAccordion} from "./components/UncontrolledAcccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function sum(a:number,b:number) {
    alert(a+b)
}

/*sum(3,4);
sum(100,333);*/

// function declaration - ми будемо використовувати для обявления компонент
function App(props:any) {
    console.log("App rendering")

    // ми здесь должни делать штото полезное
    //  и в конце функция обязана вернуть JSX
    //бейбел траспілятор перетворює JSX в обичний JS код
    let[ratingValue, setRatingValue] = useState<RatingValueType>(4);
    let[accordionCollapsed, setAccordioncollapsed] = useState<boolean>(false);

    return (
        <div className={"App"}>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
{/*
            <Rating value={3}/>
*/}
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed}
                       onClick={setAccordioncollapsed}/>
            <Accordion titleValue={"Users"} collapsed={accordionCollapsed}
                       onClick={setAccordioncollapsed}/>

            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>

            Article 2
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
{/*            <Rating value={ratingValue}/>
            <Rating value={ratingValue}/>
            <Rating value={ratingValue}/>
            <Rating value={ratingValue}/>
            <Rating value={ratingValue}/>*/}


            <OnOff />

            <OnOff />
            <OnOff />
            <OnOff />



          <UncontrolledRating />
          <UncontrolledRating />



        </div>
    );
}


type PageTitlePropsType = {
    title: string
}

function PageTitle(props:PageTitlePropsType) {
    console.log("PageTitle rendering");

    return (
        <h1>{props.title}</h1>
    )
}




export default App;
