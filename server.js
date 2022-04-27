const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const router = require('./routes/router');
dotenv.config();

const dbUri = process.env.CONN_STRING;

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}
app.use(cors(corsOptions));
app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app is listening on http://localhost:${port}`);
});
