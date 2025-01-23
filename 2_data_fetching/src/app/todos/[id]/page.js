import { db } from "@/db";

const TodoShow = async ({params}) => {
  const id = Number(params.id);

  const todo = await db.todo.findFirst({
    where: { id },
  });

  return (
    <div>
      <h1>{todo.titulo}</h1>
    </div>
  );
};

export default TodoShow;