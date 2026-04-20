import { Input, Button } from "@nextui-org/react";
import { createLocation } from "@/actions/locations/create";
import axios from "axios";
import { TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import { API_URL } from "@/constants";
import SelectManager from "./SelectManager";

export default async function FormNewLocation({store}: {store: string | string[] | undefined}) {
    const token = cookies().get(TOKEN_NAME)?.value;
    const responseManagers = await axios.get(`${API_URL}/managers`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const responseLocation = await axios.get(`${API_URL}/locations`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return (
    <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
      <h1 className="text-3xl text-white text-center"> Crear Tienda </h1>
      <Input required={true} label="Nombre" placeholder="Ocso Jurikiya" name="locationName" />
      <Input required={true} label="Dirección" placeholder="Av De La Luz S/N" name="locationAddress" />
      <Input required={true} label="Latitud" placeholder="-120" name="locationLat" />
      <Input required={true} label="Longitud" placeholder="20" name="locationLng" />
      {/* <SelectManager managers={dataManagers} locations={dataLocations} /> */}
      <Button type="submit" color="primary"> Subir </Button>
    </form>
    )
}