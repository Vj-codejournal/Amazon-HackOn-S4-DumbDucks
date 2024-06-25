const express = require("express");

const app = express();
app.use((req, res, next) => {
  res
      .header('Access-Control-Allow-Origin',
          '*');
  res
      .header('Access-Control-Allow-Methods',
          'GET, POST, PUT, DELETE');
  res
      .header('Access-Control-Allow-Headers',
          'Origin, X-Requested-With,Content-Type, Accept');
  next();
});
app.use(express.json());

require("dotenv").config();

const formRoute = require("./routes/form"); 
app.use("/api", formRoute);


const db = require("./config/database");
db.connect();

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




