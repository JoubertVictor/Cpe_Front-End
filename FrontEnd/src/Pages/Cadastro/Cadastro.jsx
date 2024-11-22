import BotaoPadrao from "../../Components/BotaoPadrao/BotaoPadrao";
import {useNavigate} from "react-router-dom";
import { Input, Form } from "./styles";

function Cadastro(){

    const navigate = useNavigate();
        
    
    return (
            <Form className="Form">
                <h1>Cadastro</h1>
                
                <Input type="text" placeholder="Nome" />
                <Input type="email" placeholder="E-mail" />
                <Input type="text" placeholder="Cargo" />
                
                <BotaoPadrao 
                    onClick={() => navigate("/")}
                />
            </Form>
    );
}


export default Cadastro;