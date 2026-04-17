import Link from "next/link";
import { Input, Button } from "@nextui-org/react";

export default function LoginPage() {

  return (
    <form className="bg-orange-500 px-10 py-2 rounded-md">
      <p className="text-2xl my-4 text-white">
        Iniciar sesión
      </p>
      <div className="flex flex-col gap-2 my-4 items-center">
        <Input label="Email" name="userEmail" type="email" isRequired={true} size="sm" />
        <Input label="Contraseña" name="userPassword" type="password" isRequired={true} size="sm" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button
          color="primary"
          type="submit"
          >
        
        </Button>
        <p className="text-white">
          ¿No tienes cuenta? <Link href="/signup" className="text-red-600 underline">Registrate</Link>
        </p>
      </div>
    </form>
  );
}
