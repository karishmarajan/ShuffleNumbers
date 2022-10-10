import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ShuffleClass from './pages/ShuffleClass';
import ShuffleFunction from './pages/ShuffleFunction';
import ShuffleTypescript from './pages/ShuffleTypescript.tsx';

const Main = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shuffleClass' element={<ShuffleClass/>}/>
            <Route path='/shuffleFunction' element={<ShuffleFunction/>}/>
            <Route path='/typescript' element={<ShuffleTypescript/>}/>
        </Routes>
        </BrowserRouter>
     );
}
 
export default Main;