import React from 'react'
import { useState } from 'react'
import axios from 'axios';


function Employeeform() {

    const [from,setfrom] = useState({
        name:"",
        salary:"",
        email:""
    })

    const getchage=(e)=>{
        setfrom({
            ...from,
            [e.target.name]:e.target.value
        })
    }


    const getsumbit=async(e)=>{
        e.preventDefault()
        if(from.name == "" || from.course == "" || from.email == ""){
            alert("pls feild first")
            return false
        }
        try {
            const res = await axios.post("http://localhost:5000/employees",from)
            console.log(res.data)
            setfrom({
                name:"",
                email:"",
                salary:""
            })
            
        } catch (error) {
            console.log("API data Found",error)
        }
    }
  return (
    <div className="container-fluid bg-primary min-vh-100 d-flex justify-content-center align-items-center">
      <div className="col-md-5 col-lg-4">
        <div className="card shadow-lg border-0 rounded-4">
          <div className="card-header bg-dark text-white text-center py-3 rounded-top-4">
            <h3 className="mb-0">Student Form</h3>
          </div>

          <div className="card-body p-4">
            <form method='POST' onSubmit={getsumbit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input

                value={from.name} name='name'
                    onChange={getchage}
                type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                onChange={getchage}
                value={from.email} name='email'
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label className="form-label">salary</label>
                <select className="form-select" onChange={getchage} value={from.course} name='course'>
                  <option>Select Course</option>
                  <option value="Frontend">frontend</option>
                  <option value="Backend"> Backend</option>
                  <option value="MERN-STACK">MERN-stack</option>
                  <option value="Full-stack">Full-stack</option>
                </select>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employeeform