const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const connect = require('./models');
const session = require('express-session');

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const loginRouter = require('./routes/login');
const userRouter = require('./routes/user');
const noticeRouter = require('./routes/notice');
const homeRouter = require('./routes/home');

const sessionObj = {
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionObj));

app.use('/', homeRouter);
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/notice', noticeRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log('listening!');
});

connect();
