import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


const Fetch = () => {
    const [task,setTask] =useState([])
    const getData=async()=>{
        const response=await axios.get('http://localhost:8000/student')
        const result=await response.data
        setTask(result)
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
        <h1 className='text-danger text-center'>Fetch Task Data </h1>
        <table className='table border w-75 mx-auto'>
           <thead>
            <th>SR.NO</th>
            <th>title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
           </thead>
           <tbody>
            {
                task.map((tas,index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{tas.title}</td>
                            <td>{tas.description}</td>
                            <td>{tas.status}</td>
                            <td>
                              <NavLink to={`/update/${tas.id}`}><button className='btn btn-danger'>Edit</button></NavLink>
                              <NavLink to={`/delete/${tas.id}`}><button className='btn btn-success ms-2'>Delete</button></NavLink>
                            </td>
                        </tr>
                    )
                })
            }
           </tbody>
        </table>

    </div>
  )
}

export default Fetch