import React, {useState} from 'react'
import s from './Affairs.module.css'
import Affairs from './Affairs'

// types
export type AffairPriorityType = "high" | "middle" | "low";

export type AffairType = {
    _id: number
    name: string
    priority: string
};
// need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    if (filter === 'all') return affairs
    else return affairs.filter(el => el.priority === filter ? el : null)  // need to fix
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { // need
    return affairs.filter(el => el._id !== _id ? el : null)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            <div className="container">
                <div className="title">homeworks 2</div>

                {/*should work (должно работать)*/}
                <div className="title title_purple">Mini todolist</div>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                />
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
