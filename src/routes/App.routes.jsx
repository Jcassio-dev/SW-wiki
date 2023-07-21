import {Routes, Route} from 'react-router-dom';

import { Home } from '../pages/Home';
import { Starships } from '../pages/Starships';
import { Characters } from '../pages/Characters';
import { Planets } from '../pages/Planets';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/characters" element={<Characters/>}/>
            <Route path="/starships" element={<Starships/>}/>
            <Route path="/planets" element={<Planets/>}/>
        </Routes>
    )
}