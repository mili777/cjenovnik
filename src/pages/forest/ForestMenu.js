import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ItemsWrap } from './components/ItemsWrap';
import UserContext from '../../UserContext';
import Cookies from 'universal-cookie';

import dorucak from './data/menu/dorucak-myvers001.json'
import bruskete from './data/menu/bruskete-myvers001.json'
import palacinke from './data/menu/palacinke-myvers001.json'
import sendvici from './data/menu/sendvici-myvers001.json'
import tortilje from './data/menu/tortilje-myvers001.json'
import pice from './data/menu/pice-myvers001.json'
import predjela from './data/menu/predjela-myvers001.json'
import paste from './data/menu/paste-myvers001.json'
import obrok_salate from './data/menu/obrok_salate-myvers001.json'
import rizoto from './data/menu/rizoto-myvers001.json'
import glavna_jela from './data/menu/glavna_jela-myvers001.json'
import corbe_supe_potazi from './data/menu/corbe_supe_potazi-myvers001.json'
import prilozi from './data/menu/prilozi-myvers001.json'
import dezerti from './data/menu/dezerti-myvers001.json'

import { useNavigate} from 'react-router-dom';

export const ForestMenu = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  let counter = cookies.get('counter');
  
  counter++;
  cookies.set('counter', counter, { path: '/' });
  
  if(counter >= 5) {
    
    navigate('/forestbistrobar', {replace: true});
  }

  const reloadUsingLocationHash = () => {
    window.location.hash = "reload";
    }
    window.onload = reloadUsingLocationHash();

  const {lang, setLang} = useContext(UserContext);


  setLang(cookies.get('lang'));

  document.body.classList.remove('overflow-hidden')
  document.body.classList.add('overflow-scroll')

  return (
    <motion.div
     /* initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}*/
    >
      <Sidebar />
      <Header title={'Meni'} en_title={"Menu"}/>
      <div className='items-grid'>
        <ItemsWrap title={'Doručak'} en_title={'Breakfast'} data={dorucak} subHeading={"Služi se do 13:00h"} en_subHeading={'Served until 13:00h'}/>
        <ItemsWrap title={'Bruskete'} en_title={'Bruschette'} data={bruskete} />
        <ItemsWrap title={'Palačinke'} en_title={'Pancakes'} data={palacinke} />
        <ItemsWrap title={'Sendviči'} en_title={'Sandwiches'} data={sendvici} />
        <ItemsWrap title={'Tortilje'} en_title="Tortillas" data={tortilje} />
        <ItemsWrap title={'pice'} en_title={'Pizza'} data={pice} />
        <ItemsWrap title={'Predjela'} en_title={'Appetizers'} data={predjela} />
        <ItemsWrap title={'Paste'} en_title={'Pasta'} data={paste} />
        <ItemsWrap title={'Obrok salate'} en_title={'Meal salads'} data={obrok_salate} />
        <ItemsWrap title={'Rižoto'} en_title={'Risotto'} data={rizoto} />
        <ItemsWrap title={'Glavna jela'} en_title={'Main meal'} data={glavna_jela} />
        <ItemsWrap title={'Čorbe Supe Potaži'} en_title={'Soup/Potagge'} data={corbe_supe_potazi} />
        <ItemsWrap title={'Prilozi'} en_title={'Side dishes'} data={prilozi} />
        <ItemsWrap title={'Dezerti'} en_title={'Desserts'} data={dezerti} />
      </div>
    </motion.div>
  )
}
