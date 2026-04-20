import { Location } from "@/entities";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { API_URL, TOKEN_NAME } from "@/constants";
import Link from "next/link";
import { cookies } from "next/headers";
export default async function LocationCard({
  store,
}: {
  store: string | string[] | undefined;
}) {
  if (!store) return null;
  const token = cookies().get(TOKEN_NAME)?.value;
  const response = await fetch(`${API_URL}/locations/${store}`,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const data: Location = await response.json()
  return (
    <Card>
      <CardHeader>
        <b className="w-full text-2xl">{data.locationName}</b>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col w-full items-center">
        <p className="w-full">
          Manager:{" "}
            <Link href={{ pathname: `/dashboard/managers/${data.manager?.managerId}` }}>
            <b className="underline">{data.manager?.managerFullName}</b>
          </Link>
        </p>
        <p className="w-full">
            Dirección: <b>{data.locationAddress}</b>
        </p>
          <iframe
            className="border-2 border-orange-800 rounded-md my-2"
            width="300"
            height="200"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAz0Y6dhhUVleZmt7-H4PO1QQWCSEz3LBg
              &q=${data.locationLatLng[0]},${data.locationLatLng[1]}`}>
          </iframe>
      </CardBody>
    </Card>
  );
}
