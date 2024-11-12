import "./App.css"
import { Button } from "antd";
import { DockerOutlined, DownloadOutlined } from "@ant-design/icons";
import { DivTeste2 } from "./Style";

function App() {

  return (

    <div>
      <div className="div-teste">
        <button> Botao 1 </button>
        <button> Botao 2 </button>
        <button> Botao 3 </button>
      </div>
      <input>
      </input>
      <div className="div-botao">
        <button
          className="botao-teste"
          onClick={() => alert("Apertando pela arron")}>
          Teste botao
        </button>
      </div>
      <div>
        <Button type="primary" size="large" shape="round" icon={<DownloadOutlined />} className="botao-antd">
          Baixar
        </Button>
      </div>
      <DivTeste2>
        OLA, to no style
      </DivTeste2>
    </div>
  )
}

export default App
