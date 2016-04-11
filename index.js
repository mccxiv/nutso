var path = require('path');
var express = require('express');
var Nuts = require('nuts-serve').Nuts;

var app = express();

var nuts = Nuts({
  // GitHub configuration
  repository: process.env.GITHUB_REPO,
  token: process.env.GITHUB_TOKEN
});

app.get('/update/RELEASES', (req, res) => {
  res.sendFile(path.join(__dirname, 'RELEASES'));
});

app.get('/update/Tc-1.2.1-full.nupkg', (req, res) => {
  res.sendFile(path.join(__dirname, 'Tc-1.2.1-full.nupkg'));
});

app.use(nuts.router);
app.listen(process.env.PORT || 80);