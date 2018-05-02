const express = require('express');
 require('./config/config');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());



app.get('/', function (req, res) {
  res.json('Hello World!');
});

/** manegr  user */
app.get('/usuario', function (req, res) {
  let body = req.body;
    res.json({
      body
    });
  });

app.post('/usuario', function (req, res) {
  let datos = req.body;

 if( datos.name=== undefined){
   res.status(400).json({
     code: 400,
     ok: false,
     mensaje : "el nombre es necesario"
   });
 }else{

  res.json({
    datos
  });
 }
  


  }); 

app.put('/usuario/:id', function (req, res) {
     let id  = req.params.id;
    res.json({
        id
    });
  });

app.delete('/usuario', function (req, res) {
    res.json('delete user');
  });


app.listen(process.env.PORT ,  ()=> {
  console.log('Example app listening on port 3000!');
});
