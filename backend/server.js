const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

//routes
const userRoutes = require('./routes/User');
const eventRoutes = require('./routes/event')


const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 5000
const DdbURI= 'mongodb+srv://george:george123@cluster0-ow00s.mongodb.net/eventHandle?retryWrites=true&w=majority'

//middleswares
app.use(bodyParser.json());
app.use(cors());


app.use('/api',userRoutes);
app.use('/api',eventRoutes);

mongoose.connect(DdbURI,
    {useNewUrlParser:true,  useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(port, () => console.log('server running on port '+port))