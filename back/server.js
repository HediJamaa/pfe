const express=require("express");
const  cors=require("cors");
const connectDB=require('./config/db_Connect');
const app = express();
require('dotenv').config();


// connect to DB
connectDB();



// routes
app.use(express.json());
app.use(cors());
app.use("/user",require("./routes/user"))
app.use("/animals", require("./routes/animal"));
app.use("/post", require("./routes/post"));


//server
const PORT=process.env.PORT;
app.listen(PORT,(err)=> err ?
console.log(err) : console.log("server is running"));