import React, {useState} from "react";
import {HumanType} from "./destructuring.test";

type PropsType = {
    title: string
    human: HumanType
    food: Array<string>
    car: {model: string}
}

function useKataerelState(m: string) {
    return [m, function (){}]
}

function useKataerelState2(m: string) {
    return {
        message: m,
        setMessage: function (){}
    }
}

export const HumanComponent: React.FC<PropsType> = ({ title, human: {name}, ...restProps }) => {

    const [message, setMessage] = useState('hello')

    // const restProps2 = {
    //     food: props.food,
    //     car: props.car
    // }

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {name}
            {restProps.car.model}
        </div>
    </div>
}