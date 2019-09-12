const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const data = require('./data');

const API_PORT = 3001;
const app = express();
app.use(cors());
//const router = express.Router();

//parses the request body if it is a readable json format
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//post login information to java backend
app.get('/user', function(req, res){
    var options = {
        host: 'localhost',
        port: 3000,
        path: '/user/signin',
        method: 'POST',
        headers: {
            //configure headers
        }
    }
});