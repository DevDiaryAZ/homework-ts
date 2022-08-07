import React from 'react'
import s from './Affairs.module.css'
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair({affair, deleteAffairCallback}: AffairPropsType) {
    const deleteCallback = () => {
        deleteAffairCallback(affair._id)
    }

    // let priority_color = s.priority_low;
    // if (affair.priority === 'middle') {
    //     priority_color = s.priority_middle
    // }
    // if (affair.priority === 'high'){
    //     priority_color = s.priority_high
    // }

    const priority_color = s.priority + ' ' + s[`priority_${affair.priority}`];

    return (
        <div className={s.item}>
            <span>{affair.name}</span>
            <span className={priority_color}>{affair.priority}</span>
            <button className={s.btn} onClick={deleteCallback}><span></span><span></span></button>
        </div>
    )
}

export default Affair
