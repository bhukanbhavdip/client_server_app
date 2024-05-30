const express = require("express")
const {connectToMongoDb} = require('./database/connect');
// const URL = require("./database/db");
const cors = require("cors")
const Routes = require("./routes/route")
const bodyParser=require('body-parser')
const app = express();
const PORT = 8000;

app.use(cors(
  {
    origin: ["https://deploy-mern-frontend.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
  }
))
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use('/',Routes)

connectToMongoDb("mongodb://127.0.0.1:27017/crud_app").then(() => console.log("mongodb connected"))
app.listen(PORT,()=> console.log(`server is running at PORT no. ${PORT}`))
