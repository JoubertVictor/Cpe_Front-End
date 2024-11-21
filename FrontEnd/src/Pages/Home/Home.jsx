import BotaoPadrao from "../../Components/BotaoPadrao";
import {useNavigate} from "react-router-dom";
import Header from "../../Components/Header";

function Home(){

    const navigate = useNavigate();
    return(

        <div>
            <Header/>
            <BotaoPadrao 
            onClick={() => navigate("/login")}
            >
            
            </BotaoPadrao>
                
        </div>

    )
}

export default Home;