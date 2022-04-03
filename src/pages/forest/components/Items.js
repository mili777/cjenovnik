import React from 'react'

export const Items = ({ data }) => {
    return (
        <div>
            <div className="item-content">
                {data.map(item => (
                    <div className="item" key={item.naziv}>
                        <div className="item-top">
                            <div className="item-top-title">
                                <p>{item.naziv}</p>
                                <span className="item-top-quantity">{item.kolicina}</span>
                            </div>
                            <div className="item-top-price">
                                <p className='item-price'>{item.cijena} <span>€</span></p>
                            </div>
                        </div>
                        { item.opis === "" ?  null : <div className="item-bottom">
                            <p>{item.opis}</p>
                        </div> }
                        
                    </div>
                ))

                }
            </div>
        </div>
    )
}
