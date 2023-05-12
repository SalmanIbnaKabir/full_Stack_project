import React, { useState } from 'react';
import './module.JobSeek.css'
import { Link } from 'react-router-dom';

function JobSeek() {
  const [state, setState] = useState({})



  const handleState = (e) => {
    setState((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    

    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(state)
    })
      .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
          alert("Successfully Applied");
          
        }
      })
  };

return (
  <>
  <Link to='/show' className='navigation'>Show Job application</Link>
  <div className="container">
    <div className="apply_box">
      <h1>
        Job Application
        <span className="title_small">(Web)</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form_container">
          <div className="form_control">
            <label htmlFor="full_name"> Full Name </label>
            <input
              id="full_name"
              name="full_name"
              placeholder="Enter Full Name..."
              onChange={handleState}
              required
            />
          </div>
          <div className="form_control">
            <label htmlFor="phone_number"> Phone Number </label>
            <input
              id="phone_number"
              name="phone_number"
              placeholder="Enter Phone Number +880 "
              onChange={handleState}
              required
            />
          </div>
          <div className="form_control">
            <label htmlFor="email"> Email </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email..."
              onChange={handleState}
              required
            />
          </div>
          <div className="form_control">
            <label htmlFor="job_role"> Job Role </label>
            <select id="job_role" name="job_role" onChange={handleState} required >
              <option disabled >Select Job Role</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="full_stack">Full Stack Developer</option>
              <option value="ui_ux">UI UX Designer</option>
            </select>
          </div>
          <div className="textarea_control">
            <label htmlFor="address"> Address </label>
            <textarea
              id="address"
              name="address"
              row="4"
              cols="50"
              placeholder="Enter Address"
              onChange={handleState}
              required
            ></textarea>
          </div>
          <div className="form_control">
            <label htmlFor="city"> City </label>
            <input id="city" name="city" placeholder="Enter City Name..." onChange={handleState} required />
          </div>
          <div className="form_control">
            <label htmlFor="pin_code"> Pin code </label>
            <input
              type="number"
              id="pin_code"
              name="pin_code"
              placeholder="Enter Pin code Name..."
              onChange={handleState}
              required
            />
          </div>
          <div className="form_control">
            <label htmlFor="date"> Joining Date </label>
            <input  type="date" id="date" name="date" onSubmit={handleState}  required/>
          </div>
          <div className="form_control">
            <label htmlFor="upload">Your CV | Resume Link  </label>
            <input type="text" id="upload" name="resume_Link" onChange={handleState} required />
          </div>
        </div>
        <div className="button_container">
          <button type="submit">Apply Now</button>
        </div>
      </form>
    </div>
  </div>
  </>
)


}

export default JobSeek