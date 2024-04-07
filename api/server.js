const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const models = require("./models")

const routes = require("./routes");
const db = require("./config/db");
const envs = require("./config/envs");

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan("tiny"));

app.use("/api", routes);
PORT= 3001;

db.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Servidor escuchando en el puerto ${PORT}`)
  );
});
