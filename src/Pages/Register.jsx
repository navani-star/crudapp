import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const {register, handleSubmit} =useForm()
    const navigate =useNavigate()

    const Postdata= async(data)=>{
       const response=await axios.post('http://localhost:8000/student',data)
       console.log(response)
       alert('data Added SuccessFully')
       navigate('/show')
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit(Postdata)}>
       <div className='bg-dark w-75 mx-auto p-3'>
          <div className='mb-3'>
           <input type='text'
           className='form-control'
           placeholder='Enter A title'
           {...register('title')}
         />
         </div>
          <div className='mb-3'>
            <input type='text'
                 className='form-control'
                 placeholder='Enter A Description'
                 {...register('description')}
                />
          </div>

          <div className='mb-3'>
          <select {...register('status')} className='form-control'>
                      <option value="">Select Status</option>
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                    </select>
            
          </div>
         <div>
            <button className='btn btn-danger w-25 p-2'>Add Data</button>
         </div>
       </div>
       </form>
    </div>
  )
}

export default Register