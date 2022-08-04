import React, {useContext} from 'react'
import UserContext from '../../../UserContext';
export const Items = ({ data }) => {
    const {lang, setLang} = useContext(UserContext);

    return (
        <div>
            <div className="item-content">
                {data.map(item => (
                    <div className="item" key={item.naziv}>
                        <div className="item-top">
                            <div className="item-top-title">
                                {lang === "ME" ? (<p>{item.naziv}</p>) : <p>{item.en_naziv}</p>}
                                <span className="item-top-quantity">{item.kolicina}</span>
                            </div>
                            <div className="item-top-price">
                                <p className='item-price'>{item.cijena} <span>€</span></p>
                            </div>
                        </div>
                        { item.opis === "" ?  null : <div className="item-bottom">
                            {lang === "ME" ? (<p>{item.opis}</p>) : <p>{item.en_opis}</p>}
                        </div> }
                        
                    </div>
                ))

                }
            </div>
        </div>
    )
}
