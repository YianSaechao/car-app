import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Cars = () => {
  const [cars, setCars] = useState([]);


  useEffect(()=>{
    axios({
        method: "GET",
        url: "http://localhost:3000/cars",
    }).then((res)=>{
        console.log(res.data);
        setCars(res.data)
    })

},[])
  return (
    <div>Show All Cars:
      {cars.map((car) => <div key={JSON.stringify(car)}>
      <div>{car.name}</div>
      <div>{car.color}</div>
      <div>{car.model}</div>
      <div>{car.age}</div>
      </div>)}
       </div>
  )
}

export default Cars