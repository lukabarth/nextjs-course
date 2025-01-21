import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Link href="/todos/create">Ir para criação de todo</Link>
    </main>
  );
}
