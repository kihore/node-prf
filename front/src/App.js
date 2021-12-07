import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card} from 'react-bootstrap';

const Cars = ()=>{
  const axios = require('axios');
  const[car,setcar]=useState([]);

 
const getcardata = async()=>{
  try{
    const data = await axios.get("http://localhost:7050/api/carlist");

setcar(data.data);
}catch(e){
  console.log(e);
}{}
};


useEffect(()=>{
  getcardata();
},[]);
  return(
    

<div class="card-columns">
      <h1 class="card-title">select your car</h1>
     {car.map((item)=>{
        return(   
          <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title key= {item.id} >{item.title}</Card.Title>
            <Card.Text >₹ {item.price}</Card.Text>
            <Card.Text >{item.description}</Card.Text>
            <Button  key= {item.id} variant="primary">Book</Button>
          </Card.Body>
        </Card>
         )
             })}
      </div>
); 
};
export default Cars;