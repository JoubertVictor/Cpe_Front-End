import BotaoPadrao from "../../Components/BotaoPadrao";
import {useNavigate} from "react-router-dom";


function Login(){

    const navigate = useNavigate();
    return(

        <div>
            ESSa é a PAGINA LOGIn
            <BotaoPadrao
            onClick={() => navigate("/cadastro")}
            >
                
            </BotaoPadrao>
        </div>

    )
}

export default Login;