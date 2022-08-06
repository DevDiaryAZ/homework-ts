import React from 'react'
import s from './Affairs.module.css'
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    let priority_color = s.priority_low;
    if (props.affair.priority === 'middle') priority_color = s.priority_middle
    if (props.affair.priority === 'high') priority_color = s.priority_high

    return (
        <div className={s.item}>
            <span>{props.affair.name}</span>
            <span className={`${s.priority} ${priority_color}`}>{props.affair.priority}</span>
            <button className={s.btn} onClick={deleteCallback}><span></span><span></span></button>
        </div>
    )
}

export default Affair
