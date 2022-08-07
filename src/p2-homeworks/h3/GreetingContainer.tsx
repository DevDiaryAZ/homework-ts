import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const setNameOnKeyDownCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addUser()
        }
    }

    const addUser = () => {
        if (name === "") {
            setError("Error!!!")
        } else {
            alert(`Hello  ${name}!`)
            addUserCallback(name)
            setName("")
            setError("")
        }
    }
    let totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            setNameOnKeyDownCallback={setNameOnKeyDownCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
