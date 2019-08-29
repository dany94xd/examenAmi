const mongoose = require ('mongoose')
const dbURL = require('./propierties').DB;


module.exports=()=>{
    mongoose.connect(dbURL,{useNewUrlParser:true})
    .then(()=>console.log( `Mongo connected on ${dbURL}`))
    .catch(err=>Console.log(`Connection has error ${err}`))

process.on('SIGINT',()=>{
    mongoose.connection.close(()=>{
        console.log(`Mongo is disconnected`)
        process.exit(0)
    })
})


}




// const mongoose = require('mongoose');
// //const URI = 'mongodb://localhost/clientes';

// const DB = 'mongodb://clieami:190994@162.212.130.145:27017/clientes';

// //const DB = 'mongodb://newUser:korn12345@ds225382.mlab.com:25382/apibookz';


// mongoose.connect(DB)
//     .then(db => console.log('db is connected'))
//     .catch(err => console.error(err));

// module.exports = mongoose;


