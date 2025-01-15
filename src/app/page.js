import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
      <Link href="/sobre">Sobre</Link>

      <h1>Acessar posts</h1>
      <Link href="/posts">Posts</Link>

      <Link href="/exemplo?parametro=abc">Página com parâmetro</Link>

      <Link href="/produtos/categorias/roupas">Ir a categoria de Roupas</Link>

      <Link href="/dashboard">Ir para dashboard</Link>
    </main>
  );
}
