"use client";

import { useRouter } from "next/navigation"

const BotaoRedirect = () => {
  const router = useRouter()

  function sendEmailAndRedirect() {
    router.push("/dashboard")
  }

  return (
    <button onClick={sendEmailAndRedirect}>Finalizar envio</button>
  )
}

export default BotaoRedirect