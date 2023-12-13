const express = require("exprss");
const cors = require("cors");


connectDatabase();
const app = express();
app.use(cors());
app.use(express.json());


module.exports = app; // default export


