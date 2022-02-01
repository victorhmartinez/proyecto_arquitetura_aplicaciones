import mongoose from "mongoose";

import config from "./config";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connect = async () => {
  try {
    await mongoose.connect(config.DB_URL, options);
    console.log("DataBase is runnig");
  } catch (error) {
    console.log(error);
    process.exit(1); //Detenemos la app
  }
};

export { connect };
