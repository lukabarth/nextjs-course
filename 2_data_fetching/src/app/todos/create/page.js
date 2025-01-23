import { addTodo } from "@/actions";

const TodoPage = () => {

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Criar nova tarefa</h1>
      <form action={addTodo} className="form flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg">
        <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">
          Título
          <input 
            type="text" 
            id="titulo" 
            name="titulo" 
            placeholder="Insira o título"
            required
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
          />
        </label>
        <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
          Descrição
          <textarea
            type="text" 
            id="descricao" 
            name="descricao" 
            placeholder="Descreva a tarefa"
            required
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full h-32"
          ></textarea>
        </label>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Criar Todo</button>
      </form>
    </div>
  );
};

export default TodoPage;