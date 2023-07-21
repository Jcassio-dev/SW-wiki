import {Routes, Route} from 'react-router-dom';

import { Home } from '../pages/Home';
import { Starships } from '../pages/Starships';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/starships" element={<Starships/>}/>
        </Routes>
    )
}