require("dotenv").config();

const mockData = require("./MOCK_DATA.json");
const job = require("./models/Job");
const connectDB = require("./db/connect");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await job.create(mockData);
    console.log("Successful");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
