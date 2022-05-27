import axios from 'axios'
import React, { useRef } from 'react'

const AddStudent = () => {
  const inputStudentFirstname = useRef()
  const inputStudentLastname = useRef()
  const inputStudentLocation = useRef()
  const inputStudentPhoto = useRef()
  const formSubmitHandler = (e) => {
    e.preventDefault()
    const submitedData = {
      firstname: inputStudentFirstname.current.value,
      lastname: inputStudentLastname.current.value,
      location: inputStudentLocation.current.value,
    }
    const formData = new FormData();
    formData.append('data', JSON.stringify(submitedData));
    Array.from(inputStudentPhoto.current.files).forEach(file => {
      formData.append('files.photo', file, file.name);
    })
    console.log(formData);
    axios.post('https://fejs-c7-api.herokuapp.com/api/students/', formData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className='dark-pallet'>
      <div className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12 z-20">
          <h1 className="text-xl font-semibold">Add new Student</h1>
          <form className="mt-6" onSubmit={formSubmitHandler}>
            <label htmlFor="firstname" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">First Name</label>
            <input id="firstname" type="firstname" name="firstname" placeholder="John" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required ref={inputStudentFirstname}/>
            <label htmlFor="lastname" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Last Name</label>
            <input id="lastname" type="text" name="lastname" placeholder="Budiman" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required ref={inputStudentLastname}/>
            <label htmlFor="location" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Location</label>
            <input id="location" type="text" name="location" placeholder="Surabaya" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required ref={inputStudentLocation}/>
            <label htmlFor="file" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Photo</label>
            <input id="file" type="file" name="file" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required ref={inputStudentPhoto}/>
            <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-black uppercase bg-primary shadow-lg focus:outline-none hover:bg-secondary hover:shadow-none hover:text-white">
              Submit
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default AddStudent