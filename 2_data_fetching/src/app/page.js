import { db } from "@/db";

import Link from "next/link";

export default async function Home() {
  const todos = await db.todo.findMany();

  return (
    <main className="container mx-auto p-4">
      <Link href="/todos/create">Ir para criação de todo</Link>
      <h1 className="text-2xl font-bold mb-4">Todos!</h1>
      <div className="space-y-4">
        {todos.map((todo) =>(
          <div key={todo.id} className="bg-gray-100 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <h2>{todo.titulo}</h2>
                <p>{todo.descricao}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
