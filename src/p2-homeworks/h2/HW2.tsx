import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = "high" | "middle" | "low";

export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
};

export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    if (filter === 'all') return affairs
    else return affairs.filter(el => el.priority === filter ? el : null)
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    return affairs.filter(el => el._id !== _id ? el : null)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

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
                    filter = {filter}
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
