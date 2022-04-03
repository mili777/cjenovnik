import React from 'react'

export const ItemsWrapNested = ({ title, data, request, query }) => {

    return (
        <div className='items'>
            <div className="item-title">
                <h3>{title}</h3>
            </div>
            {
                data[request].map(j =>
                    <div className="item-content">

                        <h4 className='item-sub-heading'>{j[query]}</h4>
                        {j.vrste.map(b =>
                            <div className="item" key={b.naziv + b.cijena}>
                                <div className="item-top">
                                    <div className="item-top-title">
                                        <p>{b.naziv}</p>
                                        <span className="item-top-quantity">{b.kolicina}</span>
                                    </div>
                                    <div className="item-top-price">
                                        <p className='item-price'>{b.cijena} <span>€</span></p>
                                    </div>
                                </div>
                                {b.opis === "" ? null : <div className="item-bottom">
                                    <p>{b.opis}</p>
                                </div>}
                                
                            </div>
                        )}
                    </div>
                )
            }


        </div>
    )
}
