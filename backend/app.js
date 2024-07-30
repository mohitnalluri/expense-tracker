<<<<<<< HEAD
import express from "express";
import cors from "cors";
import { connectDB } from "./DB/Database.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import transactionRoutes from "./Routers/Transactions.js";
import userRoutes from "./Routers/userRouter.js";
import path from "path";

dotenv.config({ path: "./config/config.env" });
const app = express();
const port = process.env.PORT;

connectDB();

const allowedOrigins = [
  "http://localhost:3000",
   //"https://exquisite-pavlova-ec673d.netlify.app",
  "https://expense-tracker-one-roan.vercel.app"
 // "https://main.d1sj7cd70hlter.amplifyapp.com",
 // "https://expense-tracker-app-three-beryl.vercel.app",
  
  // add more origins as needed
];

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: allowedOrigins,
   
   //allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Methods", "Access-Control-Request-Headers"],
   //enablePreflight: true,
    credentials:true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.options('*', cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Router
app.use("/api/v1", transactionRoutes);
app.use("/api/auth", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
=======
import express from "express";
import cors from "cors";
import { connectDB } from "./DB/Database.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import transactionRoutes from "./Routers/Transactions.js";
import userRoutes from "./Routers/userRouter.js";
import path from "path";

dotenv.config({ path: "./config/config.env" });
const app = express();
const port = process.env.PORT;

connectDB();

const allowedOrigins = [
  "http://localhost:3000",
   "https://exquisite-pavlova-ec673d.netlify.app"
 // "https://main.d1sj7cd70hlter.amplifyapp.com",
 // "https://expense-tracker-app-three-beryl.vercel.app",
  
  // add more origins as needed
];

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: allowedOrigins,
   
   //allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Methods", "Access-Control-Request-Headers"],
   //enablePreflight: true,
    credentials:true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.options('*', cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Router
app.use("/api/v1", transactionRoutes);
app.use("/api/auth", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
>>>>>>> 5c92aa311c7ad603fb3e6d434f0eb57ff76e0262
