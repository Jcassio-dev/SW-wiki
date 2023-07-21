import {Routes, Route} from 'react-router-dom';

import { Starships } from '../pages/Starships';
import { Home } from '../pages/Home';
import { Planets } from '../pages/Planets';
import { CharacterDetails } from '../pages/CharacterDetails';
import { PlanetDetails } from '../pages/PlanetDetails';

export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/starships" element={<Starships/>}/>
            <Route path="/planets" element={<Planets/>}/>
            <Route path='/characterDetails/:id' element={<CharacterDetails/>}/>
            <Route path='/planetDetails/:id' element={<PlanetDetails/>}/>
        </Routes>
    )
}