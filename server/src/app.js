const express = require('express');
const app = express();
const cors = require('cors');
const connect = require('./models');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const { MONGO_ID, MONGO_PW } = require('./config/mongodb');

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: `mongodb+srv://${MONGO_ID}:${MONGO_PW}@todo-list.mc8pohc.mongodb.net/test`,
      ttl: 14 * 24 * 60 * 60, // Time To Live
      autoRemove: 'native', // when the session expires, the document in MongoDB will be removed automatically
    }),
  })
);

app.use(cors());

const toDoRouter = require('./routes/todolist');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const userRouter = require('./routes/user');
const noticeRouter = require('./routes/notice');
const redirectRouter = require('./routes/redirect');
const profileRouter = require('./routes/profile');

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
