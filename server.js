const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

require('./config/mongoose.config');
require('./routes/product.routes')(app);
const port = 8000;



app.listen(8000, ()=>{
    console.log('Rockin and Rollin on port 8000')
})