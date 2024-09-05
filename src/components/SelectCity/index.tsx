import "./styles.css";
import { useEffect, useState } from "react";

import { Input } from "../Input";
import {
  getCityByNameService,
  CityProps,
} from "../../services/getCityByNameService";

export function SelectCity({ onSelect }) {
  const [city, setCity] = useState<CityProps[]>([]); // DEFINIÇÃO GENERIC: é a definição de tipagem flexível, permitindo a customização. O estado sempre espera a def da tipagem! 
  // O estado anterior era null. Após, criamos a interface CityProps, definimos como um array de CityProps e que começa com um array vazio.
  const [search, setSearch] = useState(""); // INFERÊNCIA: aqui, o estado inicial por ser string vazia permite q o TS faça a inferência do tipo string.
  const [isLoading, setIsLoading] = useState(false);

  async function getCities(name: string) {
    setIsLoading(true);

    const response = await getCityByNameService(name);

    setCity(response);
    setIsLoading(false);
  }

  useEffect(() => {
    if (search.trim().length === 0) {
      return;
    }

    const debounce = setTimeout(() => getCities(search), 500);
    return () => clearInterval(debounce);
  }, [search]);

  return (
    <div className="select">
      <Input
        isLoading={isLoading}
        placeholder="Buscar local"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="select-list">
        {city.length > 0 &&
          city.map((item) => (
            <button type="button" key={item.id} onClick={() => onSelect(item)}>
              <p>{item.name}</p>
            </button>
          ))}
      </div>
    </div>
  );
}
