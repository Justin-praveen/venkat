import React, { useEffect,useState } from 'react';
import axios from "axios"

const Home = () => {

    const [data,setdata]= useState("")

    useEffect(()=>{

        res()

    },[data])

 

     console.log(data)

    const res = ()=>{
        try{
               axios.get("http://localhost:8000").then((data)=>{
                  setdata(data.data.hello)     
               })
      
        }
        catch{
            alert("Backend Not working....!")
        }
 
    }
  return (
    <>
    {
        data ? ( <h1>{data}</h1>):(<h1>Loading....!</h1>)
    }
   
     <h1>"hai iam front end....!</h1>
    </>
   

  )
}

export default Home