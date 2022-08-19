const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");

app.listen(process.env.PORT || 8000, () =>
  console.log(`server is running on PORT ${PORT}`)
);
