import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ItemsWrap } from './components/ItemsWrap';
import { ItemsWrapNested } from './components/ItemsWrapNested';

import topli_napici from './data/drink/topli_napici.json'
import vode from './data/drink/vode.json'
import sokovi_negazirani from './data/drink/sokovi_negazirani.json'
import sokovi_gazirani from './data/drink/sokovi_gazirani.json'
import sokovi_prirodni from './data/drink/sokovi_prirodni.json'
import energetski_napici from './data/drink/energetski_napici.json'
import piva from './data/drink/piva.json'
import rakije from './data/drink/rakije.json'
import white_spirits from './data/drink/white_spirits.json'
import blended_whiskey from './data/drink/blended_whiskey.json'
import single_malt_whiskey from './data/drink/single_malt_whiskey.json'
import bourbon from './data/drink/bourbon.json'
import brandy from './data/drink/brandy.json'
import rum from './data/drink/rum.json'
import aperativi_likeri_vermuti from './data/drink/aperativi_likeri_vermuti.json'
import konjaci from './data/drink/konjaci.json'
import vinska_karta from './data/drink/vinska_karta.json'
import UserContext from '../../UserContext';

export const ForestDrink = () => {
  const {lang, setLang} = useContext(UserContext);

  document.body.classList.remove('overflow-hidden')
  document.body.classList.add('overflow-scroll')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
    >
      <Sidebar />
      <Header title={'Karta pića'} en_title={"Drinks"}/>
      <div className='items-grid'>
        <ItemsWrap title={'Topli napici'} en_title={'Topli napici'} data={topli_napici} />
        <ItemsWrapNested title={'Vode'} en_title={'Vode'} data={vode} request={'vode'} query={'voda'} />
        <ItemsWrap title={'Sokovi negazirani'} en_title={'Sokovi negazirani'} data={sokovi_negazirani} />
        <ItemsWrap title={'Sokovi gazirani'} en_title={'Sokovi gazirani'} data={sokovi_gazirani} />
        <ItemsWrap title={'Sokovi prirodni'} en_title={'Sokovi prirodni'} data={sokovi_prirodni} />
        <ItemsWrap title={'Energetski napici'} en_title={'Energetski napici'} data={energetski_napici} />
        <ItemsWrapNested title={'Piva'} en_title={'Piva'} data={piva} request={'piva'} query={'pivo'} />
        <ItemsWrap title={'Rakije'} en_title={'Rakije'} data={rakije} />
        <ItemsWrap title={'White spirits'} en_title={'White spirits'} data={white_spirits} />
        <ItemsWrap title={'Blended whiskey'} en_title={'Blended whiskey'} data={blended_whiskey} />
        <ItemsWrap title={'Single malt whiskey'} en_title={'Single malt whiskey'} data={single_malt_whiskey} />
        <ItemsWrap title={'Bourbon'} en_title={'Bourbon'} data={bourbon} />
        <ItemsWrap title={'Brandy'} en_title={'Brandy'} data={brandy} />
        <ItemsWrap title={'Rum'} en_title={'Rum'} data={rum} />
        <ItemsWrap title={'Aperativi, likeri, vermuti'} en_title={'Aperativi, likeri, vermuti'} data={aperativi_likeri_vermuti} />
        <ItemsWrap title={'Konjaci'} en_title={'Konjaci'} data={konjaci} />
        <ItemsWrapNested title={'Vinska karta'} en_title={'Vinska karta'} data={vinska_karta} request={'vina'} query={'vino'} />
      </div>
    </motion.div>

  )
}
