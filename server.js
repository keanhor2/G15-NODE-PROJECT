require('dotenv').config();
const express = require('express');
const cors = require('cors');
app = express();
app.use(cors({origin:"*"}));
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.listen(PORT,()=> console.log("http://localhost:" + PORT));
//connect to frontend
app.use(express.static("public"));

const itemRouter = require('./routes/item_route');
app.use('/api/items',itemRouter);
