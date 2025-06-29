
import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import {UserRoutes} from './Routes/UserRoutes.js'
dotenv.config()

const app=express()


app.use(cors(  {origin: "http://localhost:5173" }))
app.use(express.json())


app.use("/api/users",UserRoutes);



app.get("/", (req, res) => {
  res.send("Backend is working!");
});

const port=process.env.PORT

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
  });

