import {useState}  from 'react'
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from './AddTaskModal';

export default function TaskBoard() {
    const defaultTask ={
        "id":crypto.randomUUID() ,
        "title":"Learn react" ,
        "description":"React is a most famous js library for building user interaface" ,
        "tags":["web" , "react" , "js"] ,
        "priority":"High" ,
        "isFavourite" :false
    }

    const [tasks , setTasks]  = useState([defaultTask])
    const [showAddModal ,setAddShowModal] = useState(false)

     

  return (
    <section className="mb-20" id="tasks">
    {showAddModal &&  <AddTaskModal/> }

      <div className="container">
        <div className="p-2 flex justify-end">
         <SearchTask/>
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
              <TaskAction onAddTask={()=>setAddShowModal(true)}/>
            <TaskList tasks={tasks}/>
        </div>
      </div>
    </section>
  );
}