import express from 'express';
import mongoose from 'mongoose';
import Tweets from './routes/Tweets.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json({ limit: '50mb' }));

const PORT = process.env.PORT || 5000;
app.use(cors());
const MONGO_URI =
  'mongodb+srv://train:train@facebookmern.sq79x.mongodb.net/FACEBOOK_MERN?retryWrites=true&w=majority';

app.get('/', (req, res) => {
  res.status(201).json('Mohammed');
});
app.use('/Tweets', Tweets);

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  app.listen(PORT, () => console.log(`Server Running on the Port ${PORT}`)),
);
