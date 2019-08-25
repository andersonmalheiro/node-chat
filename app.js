const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { connectDb } = require("./src/db");
const api = require("./src/api");
const config = require("./config");

// Express app
const app = express();

// Conexão com o banco
connectDb().then(res => {
  console.log("\nMongoDB Connected\n");
});

// Mensagens de log
app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Diretorio de arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// Rota da api
app.use("/api/v1", api(config));

module.exports = app;
