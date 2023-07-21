import {Routes, Route} from 'react-router-dom';

import { Starships } from '../pages/Starships';
import { Home } from '../pages/Home';
import { Planets } from '../pages/Planets';
import { Login } from '../pages/Login';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/characters" element={<Home/>}/>
            <Route path="/starships" element={<Starships/>}/>
            <Route path="/planets" element={<Planets/>}/>
        </Routes>
    )
}