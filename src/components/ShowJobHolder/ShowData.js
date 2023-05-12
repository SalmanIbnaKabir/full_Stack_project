import React from 'react';
import '../../App.css'

function ShowData({ data }) {


  return (
    <div id='showData'>
      <p>Full Name: {data?.full_name} </p>
      <p>Email: {data?.email} </p>
      <p>Phone Number: {data?.phone_number} </p>
      <p>Job Role: {data?.job_role} </p>
      <p>Address: {data?.address} </p>
      <p>City: {data?.city} </p>
      <p>Pin Code: {data?.pin_code} </p>
      
      <a href={data?.resume_Link}> Resume Link</a>
      
    </div>
  )
}

export default ShowData