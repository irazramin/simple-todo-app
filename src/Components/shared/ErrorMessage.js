import React from 'react'

const ErrorMessage = ({errMsg}) => {
  return (
    <p className='text-red-500 font-medium'>{errMsg}</p>
  )
}

export default ErrorMessage