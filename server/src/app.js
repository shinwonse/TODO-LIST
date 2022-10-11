const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const session = require('express-session');
const redis = require('redis');
const connectRedis = require('connect-redis');
require('dotenv').config();

const { MONGO_ID, MONGO_PW } = require('./config/mongodb');

app.use(
  cors({
    origin: 'http://localhost:8080',
    credentials: true,
  })
);

const RedisStore = connectRedis(session);
const redisClient = redis.createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
  username: process.env.REDIS_USERNAME,
  password: process.env.REDIS_PASSWORD,
  legacyMode: true,
});

const sessionOption = {
  resave: false,
  saveUninitialized: true,
  secret: 'secret',
  cookie: {
    httpOnly: true,
    secure: false,
  },
  name: 'auth',
  store: new RedisStore({ client: redisClient, prefix: 'auth' }),
};

(async () => {
  await redisClient.connect();
})();

app.use(session(sessionOption));

const userRouter = require('./routes/user');
const oauthRouter = require('./routes/oauth');
const authRouter = require('./routes/auth');

app.use('/oauth', oauthRouter);
app.use('/users', userRouter);
app.use('/auth', authRouter);

app.listen(3000, () => {
  console.log('listening!');
});

mongoose
  .connect(
    `mongodb+srv://${MONGO_ID}:${MONGO_PW}@todo-list.mc8pohc.mongodb.net/todo-list`
  )
  .then(() => console.log(`✅ Connected to DB`))
  .catch((e) => console.log(`❌ Error on DB connection: ${e}`));
