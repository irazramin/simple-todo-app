import React from 'react';
import { toast } from 'react-toastify';

const SingleTask = ({ task, refetch }) => {
  const { _id, taskText, title, completeStatus } = task;
  const deleteTask = (id) => {
    fetch(`http://localhost:5000/deleteTask/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
            toast.success("Task delete successful")
            refetch()
        }
      });
  };

  const completeTask = id =>{
         fetch(`http://localhost:5000/completeTask/${id}`, {
           method: 'PUT',
           headers:{
               "Content-type" : "application/json"
           },
           body:JSON.stringify({completeStatus:true})
         })
           .then((res) => res.json())
           .then((data) => {
              if (data.modifiedCount > 0) {
                toast.success('Task complete');
                refetch();
             }
           });
  }
  return (
    <div class='card w-full my-5 bg-base-100 shadow-xl'>
      <div class='card-body'>
        <h2 class={`card-title ${completeStatus && 'line-through'}`}>
          {title}
        </h2>
        <p class={` ${completeStatus && 'line-through'}`}>
          {taskText}
        </p>
        <div class='card-actions justify-center lg:justify-end items-center'>
          <button
            onClick={() => completeTask(_id)}
            class='btn btn-success text-white'
          >
            Complete
          </button>
          <button
            onClick={() => deleteTask(_id)}
            class='btn btn-warning text-white'
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
