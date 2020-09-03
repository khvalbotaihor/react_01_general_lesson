import React from "react";

type RatingPropsType = {
    value: 0|1|2|3|4|5
}
export function UncontrolledRating(props:RatingPropsType) {
    console.log("UncontrolledRating rendering");

    return (
        <div>
            <Star selected={props.value>0}/><button onClick={()=>{

        }}>1</button>
            <Star selected={props.value>1}/><button onClick={()=>{

        }}>2</button>
            <Star selected={props.value>2}/><button onClick={()=>{

        }}>3</button>
            <Star selected={props.value>3}/><button onClick={()=>{

        }}>4</button>
            <Star selected={props.value>4}/><button onClick={()=>{

        }}>5</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props:StarPropsType) {
    console.log("Start rendering")

    if(props.selected===true){
        return <span><b>start</b> </span>
    }else {
        return <span>start</span>
    }
}