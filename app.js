const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World 2!");
})

app.listen(port, (process.env.PORT) => {
  console.log(`Example app listening on port ${port}`);
})
