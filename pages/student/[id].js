import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Profil = ({ id }) => {
  const [student, setStudent] = useState()
  useEffect(() => {
    axios.get(`https://fejs-c7-api.herokuapp.com/api/students/${id}?populate=*`)
      .then(res => {
        setStudent(res.data.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className='dark-pallet'>
      <div className='absolute p-5 top-20 right-1/2 translate-x-1/2 z-20 w-80 text-center bg-white flex flex-col flex-wrap content-center'>
        <h4 className='mb-3'>Profil Siswa</h4>
        {student &&
          <>
            <Zoom>
              <img alt="asd" src={student.attributes.photo.data.attributes.url} width="200" />
            </Zoom>
            <h4 className='uppercase mt-2'>{student.attributes.firstname} {student.attributes.lastname}</h4>
            <h5>{student.attributes.location}</h5>
          </>
        }
      </div>
    </div>
    //   <Worker workerUrl="https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js%22%3E
    //           <Viewer
    //             fileUrl="/file.pdf"
    // plugins = { [defaultLayoutPluginInstance]}
    //   />
    //         </Worker >
  )
}

Profil.getInitialProps = async ({ query }) => {
  const { id } = query
  return { id }
}

export default Profil