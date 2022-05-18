import React from 'react';

const SingleTask = ({ task }) => {
  const { taskText, title } = task;
  return (
    <div class='card w-full my-5 bg-base-100 shadow-xl'>
      <div class='card-body'>
        <h2 class='card-title'>{title}</h2>
        <p>{taskText}</p>
        <div class='card-actions justify-center lg:justify-end items-center'>
          <button class='btn btn-success text-white'>Buy Now</button>
          <button class='btn btn-warning text-white'>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
