// TSX é somente para componentes!

import "./styles.css";

import { useNavigate } from "react-router-dom";
import { SelectCity } from "../../components/SelectCity";

export function Search() {
  const navigate = useNavigate();

  // DEFINIÇÃO EXPLÍCITA: quando não definimos o tipo, por padrão (implícito) será  "any" (qq coisa). Ex: "city". Mas, isso ñ é uma boa prática. Por isso, é importante deixar explícito o tipo de dado que a função irá receber. Ex: "city: string"
  function handleSelected(city: string) {
    localStorage.setItem("@typewheather:city", JSON.stringify(city));
    navigate("/dashboard");
  }

  return (
    <div className="home">
      <img src="logo_large.svg" alt="Logo" />

      <main>
        <h1>
          Boas vindas ao <strong>TypeWeather</strong>
        </h1>
        <span>Escolha um local para ver a previsão do tempo</span>

        <SelectCity onSelect={handleSelected} />
      </main>
    </div>
  );
}
