import React, { useEffect, useState } from 'react';
import TaskModal from './TaskModal';

const AddTask = () => {
       const [isModalOpen, setIsModalOpen] = useState(false);
       const [tasks,setTasks] = useState([]);

    useEffect(() =>{
        fetch(``)
    },[])
  return (
    <div>
      <div className='text-center'>
        <label
          for='my-modal'
          class='btn modal-button btn btn-primary mx-auto mt-5 font-bold'
        >
          Add Task +
        </label>
      </div>

        <TaskModal />
    </div>
  );
}

export default AddTask