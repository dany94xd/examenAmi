//const authRoutes = require('./routes/auth.routes')
const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router(); // rutas primera version
const propierties = require('./config/propierties'); // propiedades de la base
const DB =require('./config/db') //url de la base 

//const { mongoose } = require('./db');
var path = require('path')

//instancia base
DB();


//body parse
const bodyParse=require('body-parser')
const bodyParseJson=bodyParse.json()
const bodyParserURLEncoded = bodyParse.urlencoded({extended:true})

//usando el body parse
app.use(bodyParseJson)
app.use(bodyParserURLEncoded)
// Settings
app.set('port', process.env.PORT || 3000);

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
app.use('/api/vendedores', require('./routes/vendedor.routes'));
app.use('/api/personas', require('./routes/persona.routes'));
//app.use('/api/parametros', require('./routes/parametro.routes'));
//app.use('/api/reportes', require('./routes/reporte.routes'));
app.use('/api/roles', require('./routes/rol.routes'));
app.use('/api/ventas', require('./routes/venta.routes'));
//app.use('/api/instituciones', require('./routes/institucion.routes'));
//app.use('/api/opcionesmenu', require('./routes/opcionesmenu.routes'));
app.use('/api/logros', require('./routes/logro.routes'));
//app.use('/api/productos', require('./routes/logro.routes'));

app.use('/api/mobilapp', require('./routes/mobileapp.routes'));
app.use('/api/webapp', require('./routes/webapp.routes'));




//starting the server

  // app.get('*',function(req,res,next){
  //      res.sendFile(path.resolve('client/index.html'))
  //    });
  
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});