import { api } from "./api";

// INTERFACE: é uma representação, ou forma de definir um tipo de dado.
export interface CityProps {
  id: number;
  name: string;
  longitude: number;
  latitude: number;
}

export async function getCityByNameService(name: string) {
  try {
    const { data } = await api.get(`/weather?q=${name}`);

    const city = {
      id: data.id,
      name: data.sys.country ? `${data.name}, ${data.sys.country}` : data.name,
      longitude: data.coord.lon,
      latitude: data.coord.lat,
    };

    return [city];
  } catch (error) {
    return [];
  }
}