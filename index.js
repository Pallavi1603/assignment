const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();          
const port = 5000;                


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.get('/', (req, res) => {      
    res.status(200).json({
        "status":200,
    });
});

const pets = [
    {
        "name": "PNut",
        "age": 3,
        },
    {
        "name": "Bashi",
        "age": 5,
    },
]

app.get('/pets', (req, res) => {
    if(req.query.sort=="ASC"){
        pets.sort(function (a, b) {
            return (a.age < b.age) ? -1 : 1;
        });
    }else if(req.query.sort=="DESC"){
        pets.sort(function (a, b) {
            return (a.age > b.age) ? -1 : 1;
        });
    }
    res.status(200).json(pets);
});



app.listen(port, () => { 
    console.log(`Now listening on port ${port}`); 
});