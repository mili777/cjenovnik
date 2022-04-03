import React from 'react'
import { Items } from './Items'

export const ItemsWrap = ({title, data, subHeading}) => {
    return (
            <div className='items'>
                <div className="item-title">
                    <h3>{title}</h3>
                        {subHeading ? <h4 className="item-sub-heading pb-0">{subHeading}</h4> : null}
                </div>
                <Items data={data} />
            </div>
    )
}
