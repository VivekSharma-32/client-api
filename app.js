require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const connectToDB = require("./src/config/db");
// load routers
const userRouter = require("./src/routers/user.router");
const ticketRouter = require("./src/routers/ticket.router");
const port = process.env.PORT || 3001;

const app = express();

// api security
app.use(helmet());

// handle cors error
app.use(cors());

app.use(express.json());

// Mongodb Connection setup
if (process.env.NODE_ENV !== "production") {
  connectToDB();
  // logger
  app.use(morgan("tiny"));
}

// Use Routers
app.use("/v1/user", userRouter);
app.use("/v1/ticket", ticketRouter);

//  handle Errors
const handleError = require("./src/utils/errorHandler");

app.use((req, res, next) => {
  const error = new Error("Resources not found !");

  error.status = 404;

  next(error);
});

app.use((error, req, res, next) => {
  ///
  handleError(error, res);
});

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
