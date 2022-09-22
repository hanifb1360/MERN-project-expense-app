import express from 'express'
import mongoose from 'mongoose';
import cors from "cors"


const PORT = 4000;
const app = express();

app.use(cors)

await mongoose.connect(
"mongodb+srv://hanif1360:hanif1360@manegix1.g6ombd5.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log('MongoDB is connected!')).catch((err) => console.error(err));

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.listen(PORT,() => {
    console.log("Server is running at http://localhost:4000");
});