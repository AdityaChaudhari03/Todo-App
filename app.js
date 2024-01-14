const express = require("express");
const app = express();
const cors = require("cors");
// require("./conn/conn");
const connectToDatabase = require('./conn/conn');
const path = require("path");
const auth = require("./routes/auth");
const list = require("./routes/list");
app.use(express.json());
app.use(cors());
require('dotenv').config();
const PORT = process.env.PORT || 3000

// Call the connectToDatabase function
connectToDatabase();

app.use("/api/v1", auth);
app.use("/api/v2", list);

app.get("/", (req, res) => {
  // app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  // res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server Started at PORT ${PORT}`);
});
