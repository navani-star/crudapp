import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  NavLink, useNavigate, useParams } from 'react-router-dom'

const Delete = () => {
    const [task,setTask]=useState({})
    const{taskID} =useParams()
    const navigate=useNavigate()
    
    const getData=async()=>{
        const response =await axios.get(`http://localhost:8000/student/${taskID}`)

        const result = await response.data
      
        setTask(result)
    }
    useEffect(()=>{
        getData()
    },[])

    const DeleteData=()=>{
         axios.delete(`http://localhost:8000/student/${taskID}`)
         alert('Data Deleted...')
        navigate('/show')
        

    }
  return (
    <div>
        <h1>Delete Data</h1>
        <div className='bg-dark w-75 mx-auto p-4 text-warning  rounded-4'>
        <div className='mb-2 mt-2'>
                <h2>Text:-{task.id}</h2>
            </div>
            <div className='mb-2 mt-2'>
                <h2>Text:-{task.title}</h2>
            </div>
            <div className='mb-2 mt-2'>
                <h2>Description:-{task.description}</h2>
            </div>
            <div>
                <button className='btn btn-success' onClick={DeleteData}>YES</button>
               <NavLink to={'/show'}><button className='btn btn-danger ms-3'>NO</button></NavLink> 
            </div>
        </div>
    </div>
  )
}

export default Delete