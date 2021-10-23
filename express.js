const express = require('express');
const shrinkRay = require('shrink-ray-current');
//And add it as a middleware before express.static is mounted:

const express = require('express');

const app = express();

app.get('*.js', (req, res, next) => {
  if (req.header('Accept-Encoding').includes('br')) {
    req.url = req.url + '.br';
    console.log(req.header('Accept-Encoding'));
    res.set('Content-Encoding', 'br');
    res.set('Content-Type', 'application/javascript; charset=UTF-8');
  }
  next();
});

app.use(express.static('public'));
app.use(shrinkRay());