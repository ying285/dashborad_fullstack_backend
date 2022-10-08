const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const userRoutes = require("./routers/user");
app.use("/user", userRoutes);

const apiRoutes = require("./routers/api");
app.use("/api", apiRoutes);



app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "An unkonwn error occurred!" });
});

mongoose
  .connect(
     "mongodb+srv://ying285:Klkmo123@dashboradfullstack.oo0ln.mongodb.net/dashborad?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(process.env.PORT || 8003);
  })
  .catch((err) => {
    console.log(err);
  });
