import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import {Card} from 'react-bootstrap'
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
    <div className="constainer">
    <div className="row">
     <div className="col-md-4">
      <h1>select your car</h1>
     {car.map((item)=>{
        return(   
          <Card style={{ width: '30rem' }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title key= {item.id}>{item.title}</Card.Title>
            <Card.Text key= {item.id} >₹ {item.price}</Card.Text>
            <Card.Text key= {item.id} >{item.description}</Card.Text>
            <Button variant="primary">Book</Button>
          </Card.Body>
        </Card>
         )
             })}
      </div>
      </div>
</div>
); 
};
export default Cars;