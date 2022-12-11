import React from 'react'
import { useSelector } from 'react-redux'

const GetItem = () => {

  const { data, isLoading, isError, isSuccess, message} = useSelector((state) => state.expense)
  console.log(data)
  return (
    <div>
      Hiii
    </div>
  )
}

export default GetItem
