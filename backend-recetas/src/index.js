import app from "./server";

// Up server
app.listen(app.get("port"), () => {
  console.log(`API-Users listening at port ${app.get("port")}`);
});
