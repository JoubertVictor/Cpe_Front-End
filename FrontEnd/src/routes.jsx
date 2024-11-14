import{
    RouterProvider,
    createBrowserRouter,
    Route,
    createRoutesFromElements
} from "react-router-dom";

import { Login, Home, Cadastro } from "./Pages";
import { AppLayout } from "./Layout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<AppLayout/>}>
                <Route index element={<Home/>} />
                <Route path="login" element={<Login/>} />
                <Route path="cadastro" element={<Cadastro/>} />
            
            </Route>
        </Route>
    )
)

export default function Routes(){
    return <RouterProvider router={router} />
}