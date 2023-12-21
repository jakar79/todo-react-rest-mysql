const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const urls = require('./routes/urlRoutes');

//WEBSERVICES

app.use(morgan('logger'));
app.use(bodyParser.json({limit: "5mb"}));
app.use(bodyParser.urlencoded({limit: "5mb", extended: true}));
app.use(cors());

//URLS RESTAPI

app.use('/api', urls)


//SERVICE PORT

const port = 8000;
app.listen(port, () => {
    console.log(`Service running on port ${port}`);
});

