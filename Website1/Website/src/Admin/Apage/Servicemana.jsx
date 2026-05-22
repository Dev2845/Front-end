import React, { use, useEffect, useState } from 'react'
import useApi from '../../Custome/useApi'
import Aheader from '../Acomman/Aheader'
import { data } from 'react-router-dom'
import axios, { Axios } from 'axios';
import useMeta from '../../Custome/useMeta';

function Servicemana()
 { useEffect (() => {
     fetchdata();
   }, []) ;

   const {api,fetchdata} = useMeta("http://localhost:3000/service")

   const (getdata,fetchdata) = useMeta
  
  const[pack, setservice] = useState ({ 
     id: "",
    name: "",
    loaction: "",
    desc: "",
    days: "",
    price: "",
    img: "",

  });


  const deleteservice = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/service/${id}`);
      console.log(res.data);
      console.log("delete This service");
      toast.success("Service Delete successfully");
      fetchdata();
    } catch (error) {
      console.log("APi data not Found ..", error);
    }
  };

  const [serviceedit, setpackedit] = useState(null);
  const [editing, setediting] = useState({
    id: "",
    name: "",
    loaction: "",
    desc: "",
    days: "",
    price: "",
    img: "",
  });

  const getdata = (data) => {
    console.log(data)
    setediting(data)
    setpackedit(data)
  }

  const getchange = (e) => {
    setediting({
      ...editing,
      [e.target.name]: e.target.value
    })
    console.log(editing)
  }

  const UpdatePack = async (e) => {
    e.preventDefault();


    try {
      if (editing.days == "" || editing.desc == "" || editing.img == "" || editing.loaction == "" || editing.name == "" || editing.price == "") {
        console.log("pls Field a Package data")
        toast.error("pls Field a Package data")
        return false
      }

      const res = await axios.put(`http://localhost:3000/service/${editing.id}`, editing)
      console.log(res.data)
      toast.success("Package Update Successfully")
      fetchdata()
      setpackedit(null)

    } catch (error) {
      console.log("API Data Not Foun", error)
      toast.error("Api data not Found")
    }
  }



  return (
    <div>
        <Aheader/>
        <h1 className='text-center'>Service Manage Detils</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">Name</th>
                            <th scope="col">desc</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            api && api.map((data, key) => {
                                // console.log(data)
                                return (
                                    <tr className='text-center' key={key}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.desc.slice(0,40)}...</td>
                                       
                                        <td>
                                            <button className='btn btn-info'>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default Servicemana