import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Student = () => {
  const [Students, setStudents] = useState();
  useEffect(() => {
    axios.get('https://fejs-c7-api.herokuapp.com/api/students/?populate=*')
      .then(res => {
        setStudents(res.data.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="dark-pallet">
      <div className='absolute w-10/12 top-20 right-1/2 translate-x-1/2 z-10'>
        <h4 className='text-center'>Daftar Siswa</h4>
        <Link href="/student/AddStudent">
          <button className="rounded-sm border-2 border-black mb-1 w-fit p-2 font-medium tracking-widest text-black bg-primary shadow-lg focus:outline-none hover:bg-secondary hover:shadow-none hover:text-white">
            Add Student
          </button>
        </Link>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {Students && Students.map(student =>
              <tr key={student.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {student.id}
                </th>
                <td className="px-6 py-4">
                  {student.attributes.firstname} {student.attributes.lastname}
                </td>
                <td className="px-6 py-4">
                  {student.attributes.location}
                </td>
                <td className="px-6 py-4 text-right">
                  <Link href={`/student/${student.id}`}>
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Student