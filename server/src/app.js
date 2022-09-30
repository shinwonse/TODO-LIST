const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connect = require('./models');
const session = require('express-session');
const redis = require('redis');
const connectRedis = require('connect-redis');

const app = express();

const RedisStore = connectRedis(session);
const redisClient = redis.createClient({
  url: `redis://redis-11864.c265.us-east-1-2.ec2.cloud.redislabs.com:11864`,
  username: 'default',
  password: 'vk7VuSEQkatHzp4C0wBJjF7f5PSIh1x1',
  legacyMode: true,
});

app.use(cookieParser('secret'));
const sessionOption = {
  resave: false,
  saveUninitialized: true,
  secret: 'secret',
  cookie: {
    httpOnly: true,
    secure: false,
  },
  name: 'login',
  store: new RedisStore({ client: redisClient, prefix: 'session' }),
};

(async () => {
  await redisClient.connect();
})();

app.use(session(sessionOption));

app.use(
  cors({
    origin: 'http://localhost:8080',
    credentials: true,
  })
);

const pageRouter = require('./routes/page');
const toDoRouter = require('./routes/todolist');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const userRouter = require('./routes/user');
const noticeRouter = require('./routes/notice');
const redirectRouter = require('./routes/redirect');
const profileRouter = require('./routes/profile');

app.use('/', pageRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/redirect', redirectRouter);
app.use('/toDo', toDoRouter);
app.use('/users', userRouter);
app.use('/notice', noticeRouter);
app.use('/profile', profileRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log('listening!');
});

connect();
