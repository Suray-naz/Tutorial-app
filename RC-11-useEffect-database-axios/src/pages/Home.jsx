import React, { useEffect, useState } from 'react';
import axios from "axios";
import BilgiList from '../components/BilgiList';
import AddBilgi from '../components/AddBilgi';



const Home = () => {

  const url="https://tutorial-api.fullstack.clarusway.com/tutorials/";

  const [bilgiler, setBilgiler]=useState([])

  const getBilgiler=async()=>{

    try {
      const {data}= await axios.get(url)
      // destructuring ederek dtabase deki data key ine saklanmıi arry i direk almış olduk 
   
      setBilgiler(data)
      
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {

    getBilgiler()

  }, []);
  
  const postBilgiler=async(yeniVeri)=>{

    await axios.post(url, yeniVeri)
    getBilgiler()

  }

  const deleteBilgiler=async(id)=>{
    await axios.delete(`${url}${id}/`);
    getBilgiler()
  }
  


  return (
    <div>
      <AddBilgi postBilgiler={postBilgiler}/>
      <BilgiList bilgiler={bilgiler} deleteBilgiler={deleteBilgiler} getBilgiler={getBilgiler}/>

    </div>
  )
}

export default Home