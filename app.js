const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
// set for ejs
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// set for styling
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


// for router.post
app.use(express.urlencoded({ extended: true }));


app.use("/new", newRouter);
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Mini-message board up and running! Listening on port ${PORT}!`);
});
