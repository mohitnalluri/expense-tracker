import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    try {
        const db = process.env.MONGO_URL;

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);
    }
    catch (err) {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        process.exit(1); // Exit process with failure
      }
}