import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props:AccordionPropsType) {

let [collapsed, SetCollapsed] = useState(true);

    console.log("Accordion rendering");
        return (
            <div>
            <AccordionTitle title={props.titleValue} onClick={()=>{SetCollapsed(!collapsed) }}/>

                {!collapsed &&  <AccordionBody/>}
        </div>
        )
}

type AccordionTitlePropsType = {
    title: string
    onClick: ()=> void
}

function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return (
        <h3 onClick={()=> {props.onClick()}}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering");
    return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
    )
}

