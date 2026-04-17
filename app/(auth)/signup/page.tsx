import { Button } from "@nextui-org/react"
import { Input } from "@nextui-org/react"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="bg-orange-500 px-10 py-2 rounded-md">
      <p className="text-2xl my-4 text-white">Registrarse</p>
      <div className="flex flex-col gap-2 my-4 items-center">
        <Input label="Email" type="email" isRequired={true} size="sm" />
        <Input label="Contraseña" type="password" isRequired={true} size="sm" />
        <Input label="Repetir contraseña" type="password" isRequired={true} size="sm" />
      </div>
        <div className="flex flex-col items-center gap-2">

      <Button color="primary">Iniciar sesión</Button>
      <p className="text-white">
        ¿Ya tienes una cuenta? <Link href="/login" className="text-red-600 underline">Inicia sesión</Link>
      </p>
      </div>
    </div>
  )
}