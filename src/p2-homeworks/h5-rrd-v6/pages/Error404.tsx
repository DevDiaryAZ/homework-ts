import React from 'react'
import s from './Error404.module.css'


function Error404() {
    return (
        <div>
            <div className={s.notFoundWrapper}>
                <div className={s.title}>404</div>
                <div className={s.subTitle}>The page you were looking for could not be found.</div>
            </div>
        </div>
    )
}

export default Error404
