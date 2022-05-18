import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import SingleTask from './SingleTask';
import TaskModal from './TaskModal';

const AddTask = () => {
       const [isModalOpen, setIsModalOpen] = useState(false);
    //    const [tasks,setTasks] = useState([]);


       const {
         data: tasks,
         isLoading,
         refetch,
       } = useQuery('task', () =>
         fetch(`http://localhost:5000/addtask`)
           .then((res) => res.json())
       );
   if(isLoading){
       return <h2 className='flex justify-center items-center'>Loading...</h2>
   }
  return (
    <div className='w-[80%] mx-auto'>
      <div className='text-center'>
        <label
          for='my-modal'
          class='btn modal-button btn btn-primary mx-auto mt-5 font-bold'
        >
          Add Task +
        </label>
      </div>

      <div className=' mt-10'>
        <h2 className='text-xl text-center'>Total task : {tasks.length}</h2>
        {tasks.map((task) => (
          <SingleTask key={task._id} task={task} />
        ))}
      </div>

      <TaskModal refetch={refetch} />
    </div>
  );
}

export default AddTask