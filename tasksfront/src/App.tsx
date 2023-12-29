import TaskForm from './components/TaskForm';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className='h-screen bg-zinc-900 text-white flex justify-center items-center'>
      <div className='bg-gray-950 p-4 w-2/5'>
        <h1 className='text-3xl font-bold text-center block my-2'>Task App</h1>
        <TaskForm />
        <TasksList />
      </div>
    </div>
  );
}

export default App;
