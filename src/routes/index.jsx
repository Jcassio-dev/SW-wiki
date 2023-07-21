import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { useAuth } from "../hooks/auth";
import { AuthRoutes } from "./Auth.routes";
export function Routes(){
    const { user } = useAuth()
    return(
        <BrowserRouter>
           {user ? <AuthRoutes/> : <AppRoutes/>}
        </BrowserRouter>
    )
}