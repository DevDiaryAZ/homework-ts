import React from 'react'
import s from './Affairs.module.css'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    // const setAll = () => {
    //     props.setFilter('all')
    // }
    // const setHigh = () => {
    //     props.setFilter('high')
    //
    // }
    // const setMiddle = () => {
    //     props.setFilter('middle')
    // }
    // const setLow = () => {
    //     props.setFilter('low')
    // }

    const set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    }

    const setFilterClass = (value: FilterType) => {
        return s.btnFilter + ((props.filter === value) ? ' ' + s.active : '')
    }

    return (
        <div>

            {mappedAffairs}

            <div className={s.btnContainer}>
                {/*<button className={s.btnFilter} onClick={setAll}>All</button>*/}
                {/*<button className={s.btnFilter} onClick={setHigh}>High</button>*/}
                {/*<button className={s.btnFilter} onClick={setMiddle}>Middle</button>*/}
                {/*<button className={s.btnFilter} onClick={setLow}>Low</button>  */}

                <button className={setFilterClass("all")} onClick={set} value={"all"}>All</button>
                <button className={setFilterClass("high")} onClick={set} value={"high"}>High</button>
                <button className={setFilterClass("middle")} onClick={set} value={"middle"}>Middle</button>
                <button className={setFilterClass("low")} onClick={set} value={"low"}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
