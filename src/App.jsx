import Tasks from "./componets/Tasks"
import { useState } from "react"
function App() {
  const [taskk, setTaskk] = useState([{
    id: 1,
    name: "Estudar React",
    done: false,
  },
  {
    id: 2,
    name: "Estudar Tailwind CSS",
    done: false,
  },
  {
    id: 3,
    name: "Estudar TypeScript",
    done: false,
  }])
return(
  <div className="w-screen h-screen bg-slate-500 flex items-center p-6 flex-col">
  <div className="w-[500px]"><h1 className="text-3xl text-center text-slate-100 flex-col">Gerenciador de Tarefas</h1>
</div>
    <Tasks taskk={taskk} />
  </div>
)

}

export default App;