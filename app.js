const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const tasks = require('./routes/taskRoutes');

//PASSERELLE SERVICES

app.use(morgan('logger'));
app.use(bodyParser.json({limit: "5mb"}));
app.use(bodyParser.urlencoded({limit: "5mb", extended: true}));
app.use(cors());

//ROUTES PASSERELLE

app.use('/api', tasks)


//SERVER PORT

const port = 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

