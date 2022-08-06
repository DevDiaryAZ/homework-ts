import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = (error) ? s.error : s.someClass

    return (
        <div className={s.container}>
            <div>
                <input value={name} onChange={(e) => setNameCallback(e)} onKeyDown={(event) => setNameCallback(event)} className={inputClass} placeholder="Enter a name..."/>
                <span className={s.errorMessage}>{error}</span>
                <button className={s.btn} onClick={addUser}>add</button>
            </div>
            <div className={s.totalUsers}>
                <div>total<br/> users</div>
                <div>{totalUsers}</div>
            </div>
        </div>
    )
}

export default Greeting
