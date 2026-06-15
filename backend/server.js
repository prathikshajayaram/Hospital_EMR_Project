const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");

const visitRoutes =
require("./routes/visitRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
    "/api/visits",
    visitRoutes
);

app.get("/", (req,res)=>{
    res.send("Hospital EMR Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server Running on Port ${PORT}`);
});