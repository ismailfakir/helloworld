const express = require('express');
const app = express();

app.get('/', (req,res) => {
  const requestIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  console.log('request from ip:'+requestIp)
  res.send("Hello BD Programmers GBG. Your ip address:"+requestIp);
});

app.listen(process.env.port || 8080);
console.log('Web Server is listening at port '+ (process.env.port || 8080));