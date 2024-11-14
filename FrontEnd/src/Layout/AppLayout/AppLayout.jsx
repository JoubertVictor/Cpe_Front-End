import { Outlet } from "react-router-dom"
import { Container } from "./Styles"

export default function AppLayout() {
    return (

        <Container>
            <p>HEARDER</p>
            <Outlet/>
            <p>FOOTER</p>
        </Container>

    );
}