import React from 'react';
import { toast } from 'react-toastify';

const SingleTask = ({ task, refetch }) => {
  const { _id, taskText, title } = task;
  const deleteTask = (id) => {
    fetch(`http://localhost:5000/deleteTask/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
        if (data.acknowledged) {
            toast.success("Task delete successful")
            refetch()
        }
      });
  };


  return (
    <div class='card w-full my-5 bg-base-100 shadow-xl'>
      <div class='card-body'>
        <h2 class='card-title line-through'>{title}</h2>
        <p>{taskText}</p>
        <div class='card-actions justify-center lg:justify-end items-center'>
          <button class='btn btn-success text-white'>Complete</button>
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
