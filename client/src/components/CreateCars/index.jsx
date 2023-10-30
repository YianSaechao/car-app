import { useState } from 'react'
import axios from 'axios';

const CreateCars = () => {
    
    const [carData, setCarData] = useState({
        name: "",
        model: "",
        color: "",
        age: 0
         
        
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(carData);
        axios({
            method: "POST",
            url: "http://localhost:3000/cars",
            data: carData  
        }).then((res) => {
            console.log(res);
        })
    }
    return (
        <div>
            <h1>Create Cars Page</h1>
            <form onSubmit={handleSubmit}>
                Name: <input type="text" name="name" value={carData.name} onChange={(e) => setCarData({ ...carData, name: e.target.value })} />
                <br />
                Color: <input type="text" name="color" value={carData.color} onChange={(e) => setCarData({ ...carData, color: e.target.value })} />
                <br />
                Model: <input type="text" name="model" value={carData.model} onChange={(e) => setCarData({ ...carData, model: e.target.value })} />
                <br />
                Age: <input type="number" name="age" value={carData.age} onChange={(e) => setCarData({ ...carData, age: e.target.value })} />
                <br />
                <button type='submit' onClick={handleSubmit}>Create Car</button>
                 
            </form>
        </div>);
}
export default CreateCars