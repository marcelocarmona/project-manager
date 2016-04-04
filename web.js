'use strict';

  var gzippo = require('gzippo');
  var express = require('express');
  var app = express();
  // var gulp = require('gulp');

// require('./gulp/build.js');
//   gulp.start('build');


  // app.use(express.logger('dev'));

  // process.env.PWD = process.cwd();


  app.use(express.static(__dirname + "/dist"));
  //
  // app.use(express.static(process.env.PWD + '/dist'));

  var server = app.listen(process.env.PORT || 5000);
    var host = server.address().address;
  var port = server.address().port;


   app.get('/hola', function(request, response) {
     response.send(__dirname +'  Escuchando desde http://'+host+':'+port);
    });

  console.log(__dirname +'   Escuchando desde http://%s:%s', host, port);