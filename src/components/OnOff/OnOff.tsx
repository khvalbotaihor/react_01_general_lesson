import React from "react";
import './OnOff.css'

type OnOffPropsType = {
    switchedOn: boolean
}

export function OnOff(props: OnOffPropsType){
    return(
        <div>
            {props.switchedOn && <div className={"onOffGreen"}>On</div>}
            {props.switchedOn && <div>Off</div>}

            {!props.switchedOn && <div className={"onOffRed"}>Off</div>}
            {!props.switchedOn && <div>On</div>}

            {props.switchedOn ? <div className={"onOffGreen"}>first circle</div> : <div className={"onOffRed"}>second circle</div>}
        </div>
    )
}