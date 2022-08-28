import React from 'react'
import Header from './Header'
import Pages from './Pages'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            <div className="container">
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>

            <Pages/>

            </HashRouter>
            </div>
        </div>
    )
}

export default HW5
