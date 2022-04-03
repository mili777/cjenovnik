import React, { useEffect } from 'react'
import { motion } from 'framer-motion';

import './css/style.css'
import { Link } from 'react-router-dom'

import leafRight from '../../img/forest/leaf-right.svg'
import leafLeft from '../../img/forest/leaf-left.svg'
import pizza from '../../img/forest/pizza.svg'
import salad from '../../img/forest/salad.svg'
import coffe from '../../img/forest/coffe.svg'
import sandwich from '../../img/forest/sandwich.svg'

export const ForestMain = () => {
   
    

    useEffect(() => {
        
        document.body.classList.remove('overflow-scroll')
        document.body.classList.add('overflow-hidden')
        
        window.scrollTo(0, 1);

    }, []);

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
      >
            <div className="flex-wrapper">
                <img src={leafRight} alt="img" id="leaf-right" />
                <img src={pizza} alt="img" id="pizza" />
                <img src={salad} alt="img" id="salad" />
                <img src={leafLeft} alt="img" id="leaf-left" />
                <img src={coffe} alt="img" id="coffe" />
                <img src={sandwich} alt="img" id="sandwich" />

                <div className='container'>
                    <div className="menu-top">
                        <a href="https://www.instagram.com/forestbistrobar/" target="_blank" rel="noreferrer">
                            <img className='social-icon' src="./img/forest/instagram.svg" alt="IG" />
                        </a>

                    </div>
                    <div className="logo">
                        <img src="./img/forest/forest-logo-grey.svg" alt="" />
                    </div>

                    <div className="menu-content">
                        <Link to="./karta_pica">
                            <div className="menu-box">
                                <img src="./img/forest/drink.svg" alt="" />
                                <h2>Karta pića</h2>
                            </div>
                        </Link>
                        <Link to="./meni">
                            <div className="menu-box">
                                <img src="./img/forest/menu.svg" alt="" />
                                <h2>Meni</h2>
                            </div>
                        </Link>
                    </div>


                </div>
                <div className="footer-wrap">
                    <div className="footer">
                        <a href="https://www.instagram.com/studiosimple.cg/" target="_blank" rel="noreferrer">
                            <img className='social-icon' src="./img/forest/instagram.svg" alt="IG" />
                        </a>
                        <a href="https://studiosimple.me/" target="_blank" rel="noreferrer">
                            <img className='footer-logo' src="./img/forest/studio-simple-logo.png" alt="" />
                        </a>
                    </div>
                </div>


            </div>
            </motion.div>
    )
}
