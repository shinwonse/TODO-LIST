/* eslint-disable no-undef */
// express 모듈 불러오기
const express = require('express');
const path = require('path');

// express 사용
const app = express();

app.use('/src', express.static(path.resolve(__dirname, 'src')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('src', 'index.html'));
  console.log(res);
});

app.listen(process.env.PORT || 3000, () => console.log('Server running ....'));
