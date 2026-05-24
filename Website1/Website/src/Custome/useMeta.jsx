import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function useMeta(apiurl){
// read api
  const [getapi, setapi] = useMeta([])

  useEffect(() => {
    fetchdata()
  },[apiurl])
}

const fetchdata = async () => {
  const res = await axios.get(apiurl)
  setgetapi(res.data)
}
//  add api
 
const [input,setinput] = useState(inp)
  
// const redirect = useNavigate()
// const getchange  = (e) =>{
//   setinput ({
//     ...input,
//     id: new Date().getTime.toString(),
//     [e.target.name]: e.target.value
//   })
// } 

// const getsubmit = async (e) =>{
//   e.preventDefault();
// }