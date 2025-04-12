import { ChevronRight } from "lucide-react";

function Tasks(props) {
    return(
        <ul className="m-4 bg-slate-300 w-96 rounded-md space-y-4 p-4 shadow">
        {props.taskk.map((task) => (
            <li key={task.id} className="flex gap-2">

                <button className='bg-slate-600 rounded-md p-2 text-white w-full text-left'>{task.name}</button>
                <button className="bg-slate-600 rounded-md text-white p-2">
                    <ChevronRight />
                </button>
            </li>
        ))}
    </ul>
    );
}

export default Tasks;