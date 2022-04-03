import React from 'react'
import { Link } from 'react-router-dom'

export const Header = ({ title }) => {
    return (
        <>
        <div className="btn-content">
        <Link to="/forestbistrobar">
            <div className="btn-green">
                <img className='arrow-back' src="../img/forest/arrow-back.svg" alt="" />
                <img className='sidebar-img' src="../img/forest/green-assett.png" alt="" />
                <div className='btn-name'>{title}</div>
            </div>
        </Link>
    </div>
        <div className='header'>
           
            <img src="../img/forest/forest-logo-white.svg" alt="Forest logo" />
        </div>
        </>
    )
}
