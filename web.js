const express = require('express');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');
//var path = require('path')

// Settings
app.set('port', process.env.PORT || 3002);

// Middlewares
//app.use('/',express.static('client',{redirect:false}));
//app.use(cors({origin: 'http://162.212.130.145'}));
app.use(cors({origin: 'http://localhost:4200'}));

app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());

// Routes
app.use('/api/employees', require('./routes/employee.routes'));
app.use('/api/usuarios', require('./routes/usuario.routes'));
app.use('/api/personas', require('./routes/persona.routes'));
app.use('/api/parametros', require('./routes/parametro.routes'));
app.use('/api/reportes', require('./routes/reporte.routes'));
app.use('/api/roles', require('./routes/rol.routes'));
app.use('/api/eventos', require('./routes/evento.routes'));
app.use('/api/instituciones', require('./routes/institucion.routes'));
app.use('/api/opcionesmenu', require('./routes/opcionesmenu.routes'));
app.use('/api/logros', require('./routes/logro.routes'));




//starting the server

  // app.get('*',function(req,res,next){
  //      res.sendFile(path.resolve('client/index.html'))
  //    });
  
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});