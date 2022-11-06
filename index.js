import express from "express";

const app = express();

app.use(express.json());

const port = 3001;

app.listen(port, function(){
    console.log(`Server is running via port ${port}`);
})