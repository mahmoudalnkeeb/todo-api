const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router');
dotenv.config();

const dbUri = process.env.CONN_STRING;

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json());

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
