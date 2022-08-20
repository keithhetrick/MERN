const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

require("./config/mongoose.config");
require("./routes/players.routes")(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 8000, () =>
  console.log(`server is running on PORT ${PORT}`)
);
