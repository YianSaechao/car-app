const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');  
require('dotenv').config();
require('./config/db.js');
const Car = require('./models/cars.js');
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(morgan('dev'));
app.use(helmet());
 

app.post("/cars", async (req, res) => {

    try {
        const response = await Car.create(req.body);
        res.status(201).send("created a new car!")
    } catch (err) {
        console.error(err)
        res.send("ERROR")
    }
    
});

app.get('/cars', async (req, res) =>{
    const arrayOfCars = await Car.find()
    res.send(arrayOfCars);
})

 



// END ROUTES //

app.listen(PORT, () => {
    console.log(`Server LIVE on port ${PORT}`);
});