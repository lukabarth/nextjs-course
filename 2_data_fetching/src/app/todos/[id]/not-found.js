import Link from "next/link";

const notFound = () => {
  return (
    <div>
      <h1>Todo não encontrado</h1>
      <Link href="/">Voltar para a home</Link>
    </div>
  )
}

export default notFound;