import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import NofoundTask from "./NoFoundTask";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React Native",
    description:
      "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate , setTaskToUpdate] =  useState(null)

  const handleAddTask = (newTask, isAdd) => {
   
   if(isAdd){
    setTasks([...tasks , newTask])

   }else{
         setTasks( tasks.map(task =>{
          if(task.id === newTask.id){
             return newTask ;
          }

          return task ;
      })
    
    )
      
   }
    
    setShowAddModal(false)
    
  };

  const handleEditTask =(task)=>{
 
     setTaskToUpdate(task)
     setShowAddModal(true)
  }


  const handleOnCloseModal =()=>{
      setShowAddModal(false)
      setTaskToUpdate(null)

  }

   const handleDeleteTask =(taskId)=>{
    
    const taskAfterDelete = tasks.filter(task => task.id === taskId)
          setTasks(taskAfterDelete)
   }

    const handleOnDeleteAll =()=>{
      tasks.length = 0 
      setTasks([...tasks])
    }


   const handleFavouriteTask=(taskId)=>{

     //less betther code
    // const taskIndex = tasks.findIndex((task) => task.id === taskId);
    // const newTasks = [...tasks];
    // newTasks[taskIndex].isFavourite = !newTasks[taskIndex].isFavourite;
    // setTasks(newTasks);

      //much better code
    setTasks(tasks.map((task) => {
      if (task.id === taskId) {
          return {...task, isFavourite: !task.isFavourite};
      } else {
          return task;
      }
  }))
     
   }



   const handleOnSearch =(searchTerm)=>{
          

    const filtered = tasks.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()))

    setTasks([...filtered])
   }

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && <AddTaskModal 
      onSave={handleAddTask} 
      onCloseModal={handleOnCloseModal}
      taskToUpdate={taskToUpdate}
      />}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask  onSearch={handleOnSearch} />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction 
          onAddTask={() => setShowAddModal(true)} 
             onDeleteAll={handleOnDeleteAll}
          
          />
            {
              tasks.length > 0 ? ( <TaskList 
          
                tasks={tasks} 
                onEdit={handleEditTask}
                onDelete={handleDeleteTask} 
                onFav={handleFavouriteTask}
                 />) : (<NofoundTask/>)
            }
        </div>
      </div>
    </section>
  );
}
