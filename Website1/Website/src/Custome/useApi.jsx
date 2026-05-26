
import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

function useApi(apilink) {
    const [api,setapi] = useState([])

    useEffect(()=>{
        fetchdata()
    },[])
    const fetchdata =async()=>{
        const res = await axios.get(`${apilink}`)
        setapi(res.data)
    }
  
    return {api,fetchdata}
}

export default useApi