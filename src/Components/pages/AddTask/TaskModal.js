import themes from 'daisyui/src/colors/themes';
import React from 'react';
import { toast } from 'react-toastify';

const TaskModal = ({setIsModalOpen}) => {
 
    const handleAddask = e =>{
        e.preventDefault();
        const title = e.target.title.value;
        const taskText = e.target.task.value;
        
        const task = {
            title:title,
            taskText:taskText
        }
        fetch(`http://localhost:5000/addtask`,{
            method:"POST",
            headers:{
                "Content-type" : "application/json"
            },
            body: JSON.stringify(task)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Task added successfully')
            }
        })

        
    }
  return (
    <div>
      <div>
        <input
          type='checkbox'
          id='my-modal'
          className='modal-toggle relative'
        />
        <div className='modal modal-bottom sm:modal-middle'>
          <div className='modal-box'>
            <h3 className='font-bold text-lg text-secondary text-center'>
              Add Your task Please
            </h3>
            <label
              htmlFor='my-modal'
              className='btn btn-sm btn-circle absolute right-2 top-2'
            >
              ✕
            </label>
            <form
              onSubmit={handleAddask}
              className='flex flex-col  justify-center items-center mt-3 gap-3 px-6'
            >
              <input
                type='text'
                placeholder='Add title'
                name='title'
                className='input input-bordered w-full'
              />
              <textarea
                placeholder='task'
                name='task'
                id=''
                className='input my-3 input-bordered w-full h-[100px]'
              ></textarea>
    
              <input
                type='submit'
                value='Add'
                className='btn btn-secondary w-full text-white '
              />
              {/* <div class='modal-action w-full'>
                <label
                type='submit'
                  for='my-modal'
                  class='btn btn-secondary w-full text-white'
                >
                  Yay!
                </label>
              </div> */}
            </form>
            <div className='modal-action'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskModal