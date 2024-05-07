const connectingToDB = require("./config/db");
const express = require("express");

require("dotenv").config();
connectingToDB();

const app = express();
app.use(express.json());

const {
  createItem,
  updateItem,
  getItem,
} = require("./controllers/movieController");
app.post("/api/items", createItem);
app.put("/api/items/:id", updateItem);
app.get("/api/items/:id", getItem);

app.listen(process.env.PORT, function () {
  console.log(`Server is running on port ${process.env.PORT}`);
});
