import axios from 'axios'
import React, { useEffect } from 'react'


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