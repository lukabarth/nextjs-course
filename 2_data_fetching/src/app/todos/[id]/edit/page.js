import { findTodoById } from "@/actions";

const TodoEdit = async ({params}) => {
  const id = Number(params.id);

  const todo = await findTodoById(id);

  return (
    <div>
      <h1>Editando: {todo.titulo}</h1>
    </div>
  )
}

export default TodoEdit;