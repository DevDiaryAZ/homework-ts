import React, {useState} from 'react'
import {Link} from "react-router-dom";
import s from "./Header.module.css"
import {PATH} from "./Pages";

function Header() {
    const [activeLink, setActiveLink] = useState(PATH.PRE_JUNIOR);

    return (
        <div className={s.nav}>
            <div className={s.linkContainer}>
                <Link to={PATH.PRE_JUNIOR} className={`${s.link} ${(activeLink === PATH.PRE_JUNIOR) ? s.active : null}`}
                      onClick={() => setActiveLink(PATH.PRE_JUNIOR)}>pre-junior</Link>
                <Link to={PATH.JUNIOR} className={`${s.link} ${(activeLink === PATH.JUNIOR) ? s.active : null}`}
                      onClick={() => setActiveLink(PATH.JUNIOR)}>junior</Link>
                <Link to={PATH.JUNIOR_PLUS}
                      className={`${s.link} ${(activeLink === PATH.JUNIOR_PLUS) ? s.active : null}`}
                      onClick={() => setActiveLink(PATH.JUNIOR_PLUS)}>junior+</Link>
            </div>
            <span className={s.title}>navigation<span className={s.burger}></span></span>
        </div>
    )
}

export default Header
