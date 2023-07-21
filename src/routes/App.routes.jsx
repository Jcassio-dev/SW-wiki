import {Routes, Route} from 'react-router-dom';

import { Home } from '../pages/Home';
import { Starships } from '../pages/Starships';
import { Characters } from '../pages/Characters';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/characters" element={<Characters/>}/>
            <Route path="/starships" element={<Starships/>}/>
        </Routes>
    )
}