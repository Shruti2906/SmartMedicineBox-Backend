const express = require("express");
const { APP_PORT } = require("./api/utils/constants");
const userRoutes = require("./api/routes/user.route");
const scheduleRoutes = require("./api/routes/schedule.route");
const db = require("./api/utils/db");
const app = express();
const bodyParser = require("body-parser");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send(new Date());
});

app.use("/user", userRoutes);
app.use("/schedule", scheduleRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(APP_PORT, () => {
  console.log(`Example app listening on port ${APP_PORT}`);
});
