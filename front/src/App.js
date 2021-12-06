import React,{useState,useEffect} from 'react'


const Cars = ()=>{
  const axios = require('axios');
  const[car,setcar]=useState([]);

 
const getcardata = async()=>{
  try{
    const data = await axios.get("http://localhost:7050/api/carlist");

setcar(data.data);
}catch(e){
  console.log(e);
}
};


useEffect(()=>{
  getcardata();
},[]);
  return(
     <div className="cars">
      <h1>select your car</h1>
     {car.map((item)=>{
        return(   
       <div key={item.id}>
  <img src={item.image} alt="..." objectFit="cover" layout="fit"/>
  <h3 key={item.id}>{item.title}</h3>
  <h3 key={item.id}>₹{item.price}</h3>
  <h3 key={item.id}>{item.description}</h3>
    <a href="#" class="btn btn-primary">book</a>
      </div>
         )
             })}
      </div>

); 
};
export default Cars;