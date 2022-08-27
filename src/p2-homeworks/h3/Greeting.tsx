import React, {ChangeEvent} from 'react'
import {KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    setNameOnKeyDownCallback: (e: KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, setNameOnKeyDownCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass

    return (
        <div className={s.container}>
            <div>
                <input value={name}
                       onChange={setNameCallback}
                       onKeyDown={setNameOnKeyDownCallback}
                       onBlur={setNameCallback}
                       className={`${s.input} ${inputClass}`}
                       placeholder="Enter a name..."/>
                <span className={s.errorMessage}>{error}</span>
                <div className={s.btnContainer}>
                    <button className={s.btn} onClick={addUser} disabled={!name}>add</button>
                </div>
            </div>
            <div className={s.totalUsers}>
                <div>total<br/> users</div>
                <div>{totalUsers}</div>
            </div>
        </div>
    )
}

export default Greeting
