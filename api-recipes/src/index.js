import app from "./server";
import * as db from "./config/db";

// Connect with DataBase
db.connect();

// Up server
app.listen(app.get("port"), () => {
  console.log(`API-Recipes listening at port ${app.get("port")}`);
});
