import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Aheader from '../Acomman/Aheader'

function PackAdd() {
    
    const redirect = useNavigate()

    const [pack,setpack] = useState({
        id: "",
        name: "",
        loaction: "",
        desc: "",
        days: "",
        price: "",
        img: ""
    })

    const getchange = (e) => {
        setpack({
            ...pack,
            id: new Date().getTime().toString,
            [e.target.name]: e.target.value
        })
        console.log (pack)
    }

    const getsubmit = async (e) => {
        
        e.preventDefault();

        try {
            
            if (pack.days == "" || pack.desc =="" || pack.loaction == "" || pack.name == "" || pack.price == "" ){
                
                console.log("pls field a package data")
                toast.error("pls field a package data")
                return false
            }

            const res = await axios.post("http://localhost:3000/package",pack)
            console.log(res.data)
            setpack({

                name: "",
                loaction: "",
                desc: "",
                days: "",
                price: "",
                img: ""
          
            })
            redirect("/packmange")
            toast.success("Package successfully Added")
    
        } catch (error) {
            console.log("Api data not found", error)
            
        }
    }
  return (
    <div>
        <Aheader/>
        <div className="col-md-6 mx-auto">
                <div className="contact_2l">
                    <form action="" onSubmit={getsubmit}>

                        <h1 className="mt-3">PackAge Add</h1>
                        <div className="blog_dt1ib3i row">
                            <div className="col-md-6">
                                <div className="blog_dt1ib3il">
                                    <input placeholder="Name" value={pack.name} name='name' onChange={getchange} className="form-control border-0 bg-light" type="text" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="blog_dt1ib3il">
                                    <input placeholder="Loaction" value={pack.loaction} name='loaction' onChange={getchange} className="form-control border-0 bg-light" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="blog_dt1ib3i row mt-4">
                            <div className="col-md-6">
                                <div className="blog_dt1ib3il">
                                    <input placeholder="Enter your Days" value={pack.days} name='days' onChange={getchange} className="form-control border-0 bg-light" type="text" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="blog_dt1ib3il">
                                    <input placeholder="Enter your Price" value={pack.price} name='price' onChange={getchange} className="form-control border-0 bg-light" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="blog_dt1ib3i row mt-4">
                            <div className="col-md-12">
                                <div className="blog_dt1ib3il">
                                    <input placeholder="Enter your Images" name='img' onChange={getchange} value={pack.img} className="form-control border-0 bg-light" type="url" />
                                </div>
                            </div>

                        </div>
                        <div className="blog_dt1ib3i row mt-4">
                            <div className="col-md-12">
                                <div className="blog_dt1ib3il">
                                    <textarea placeholder="Enter your  desc" value={pack.desc} name='desc' onChange={getchange} className="form-control form_text border-0 bg-light" defaultValue={""} />

                                </div>
                            </div>
                            <div className="col-md-12 mt-4">
                                <input className="form-control btn btn-success" type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default PackAdd