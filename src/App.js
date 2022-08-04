import { useContext, useEffect, useRef, useState } from "react";
import { Main } from './pages/main/Main';
import { useLocation, Routes, Route } from 'react-router-dom';
import { ForestMain } from './pages/forest/ForestMain';
import { ForestDrink } from './pages/forest/ForestDrink';
import { ForestMenu } from './pages/forest/ForestMenu';
import { AnimatePresence } from 'framer-motion'
import UserContext from './UserContext'

function App() {
  const location = useLocation();
  const [lang, setLang] = useState('EN');
  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <UserContext.Provider value={{
        lang,
        setLang
      }}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Main />} />
          <Route path='/forestbistrobar' element={<ForestMain />} />
          <Route path='/forestbistrobar/karta_pica' element={<ForestDrink />} />
          <Route path='/forestbistrobar/meni' element={<ForestMenu />} />
        </Routes>
      </UserContext.Provider>
    </AnimatePresence>
  );
}

export default App;
