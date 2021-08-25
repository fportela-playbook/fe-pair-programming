import React,{useState,useEffect} from "react"

export const useFetchApi = (endpoint)=>{
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(true)

  const apiUrl = `http://localhost:8080/${endpoint}`

  async function getData(url){
    try{
      const res = await fetch(url)
      const data = await res.json();
      setLoading(false)
      setData(data)
    }
    catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    getData(apiUrl)
  },[apiUrl])

  return {data,loading}
}