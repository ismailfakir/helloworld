const express = require('express');
const app = express();
const port = process.env.PORT || 9090;

app.get('/', (req,res) => {
  const timeNow = new Date().toISOString();
  const requestIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress


  console.log("["+timeNow+"]"+" Request from ip:"+requestIp);
  res.send('Hello BD Programmers GBG!');
});

app.listen(port,() => {
  console.log('Web Server is listening at http://localhost:'+port);
})