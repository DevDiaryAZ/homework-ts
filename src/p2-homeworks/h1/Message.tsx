import React from 'react'
import styles from "./Message.module.css"

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={styles.message}>
            <div className={styles.message__imageContainer}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={styles.message__textContainer}>
                <div className={styles.message__name}>{props.name}</div>
                <div className={styles.message__text}>{props.message}</div>
                <div className={styles.message__time}>
                    {props.time}
                </div>
                <div className=
                         {styles.message__leftTriangle}></div>
            </div>
        </div>
    )
}

export default Message
