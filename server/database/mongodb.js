import mongoose from "mongoose";


async function connect() {
    await mongoose.connect(
        "mongodb+srv://hanif1360:hanif1360@manegix1.g6ombd5.mongodb.net/?retryWrites=true&w=majority");
       console.log('MongoDB is connected!');
}

export default connect;

