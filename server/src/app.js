const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const connect = require('./models');

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const loginRouter = require('./routes/login');
// const todoListRouter = require('./routes/todolist');
const userRouter = require('./routes/user');
const noticeRouter = require('./routes/notice');
const homeRouter = require('./routes/home');

app.use('/', homeRouter);
// app.use('/', todoListRouter);
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/notice', noticeRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log('listening!');
});

connect();
