import { api } from "./api";

// INTERFACE: é uma representação, ou forma de definir um tipo de dado.
export interface CityProps {
  id: number;
  name: string;
  longitude: number;
  latitude: number;
}

// Definimos EXPLICITAMENTE o tipo de retorno da função. No caso, o tipo é um array de objetos de CityProps.
export async function getCityByNameService(name: string) : Promise<CityProps[]> {
  try {
    const { data } = await api.get(`/weather?q=${name}`);

    // conteúdo retornado pela API:
    const city = {
      id: data.id,
      name: data.sys.country ? `${data.name}, ${data.sys.country}` : data.name,
      longitude: data.coord.lon,
      latitude: data.coord.lat,
    };

    // retorno da função: conteúdo em um array de objs
    return [city];
  } catch (error) {
    return []; // se der erro, retorna um array vazio
  }
}