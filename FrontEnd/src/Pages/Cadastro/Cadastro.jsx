import BotaoPadrao from "../../Components/BotaoPadrao/BotaoPadrao";
import {useNavigate} from "react-router-dom";



function Cadastro(){

    const navigate = useNavigate();
    return(

        <div>
            ESSa é a PAGINA CADASTRO
            <BotaoPadrao 
            onClick = {() => navigate("/login")}
            >
                
            </BotaoPadrao>
        </div>

    )
}

export default Cadastro;