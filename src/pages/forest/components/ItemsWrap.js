import React, {useContext} from 'react'
import { Items } from './Items'
import UserContext from '../../../UserContext';
export const ItemsWrap = ({title, data, subHeading, en_title, en_subHeading}) => {
    const {lang, setLang} = useContext(UserContext);
    return (
            <div className='items'>
                <div className="item-title">
                    {lang === 'ME' ? (<h3>{title}</h3>) : (<h3>{en_title}</h3>)}
                    {lang === 'ME' ? (subHeading ? <h4 className="item-sub-heading pb-0">{subHeading}</h4> : null) : (en_subHeading ? <h4 className="item-sub-heading pb-0">{en_subHeading}</h4> : null)}
                        {}
                </div>
                <Items data={data} />
            </div>
    )
}
