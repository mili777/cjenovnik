import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../../UserContext';
export const Header = ({ title, en_title }) => {
    const {lang, setLang} = useContext(UserContext);
    return (
        <>
        <div className="btn-content">
        <Link to="/forestbistrobar">
            <div className="btn-green">
                <img className='arrow-back' src="../img/forest/arrow-back.svg" alt="" />
                <img className='sidebar-img' src="../img/forest/green-assett.png" alt="" />
                
                {lang === "ME" ? (<div className='btn-name'>{title}</div>) : (<div className='btn-name'>{en_title}</div>)}
            </div>
        </Link>
    </div>
        <div className='header'>
           
            <img src="../img/forest/forest-logo-white.svg" alt="Forest logo" />
        </div>
        </>
    )
}
