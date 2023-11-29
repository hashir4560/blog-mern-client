import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-gx0fxio-shard-00-00.bnh9san.mongodb.net:27017,ac-gx0fxio-shard-00-01.bnh9san.mongodb.net:27017,ac-gx0fxio-shard-00-02.bnh9san.mongodb.net:27017/?ssl=true&replicaSet=atlas-fg8c6r-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL);
    console.log("DataBase Connected Successfully");
  } catch (error) {
    console.log("Error While Connecting to the Database", error);
  }
};

export default Connection;
