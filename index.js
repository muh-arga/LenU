require("dotenv").config();
const express = require("express");
const cors = require("cors");

const routes = require("./src/interface/routes/index");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server run on http://127.0.0.1:${port}`);
});
