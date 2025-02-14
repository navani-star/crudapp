import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
const Update = () => {
    const { handleSubmit, register, setValue } = useForm()
    const { taskID } = useParams()
    const navigate = useNavigate()

    const getData = async () => {
        const response = await axios.get(`http://localhost:8000/student/${taskID}`)
        setValue('title', response.data.title)
        setValue('description', response.data.description)

    }
    useEffect(() => {
        getData()
    }, [])

    const updateData = (data) => {
        axios.put(`http://localhost:8000/student/${taskID}`, data)
        alert('data updated')
        navigate('/show')

    }
    return (
        <div>
            <h1> Update Data</h1>
            <div>
                <form onSubmit={handleSubmit(updateData)}>
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
                            <button className='btn btn-danger w-25 p-2'>Update Data</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Update