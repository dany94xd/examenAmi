const mongoose = require('mongoose');
const authSchema = require('./auth.model')
//const authSchema=require('./usuario')


authSchema.statics={
    create: function(data,cb){
        const user = new this(data)
        user.save(cb)
    },
    login: function(query,cb){
        this.find(query,cb)
    }
}

const authModel = mongoose.model('Users',authSchema);

//const authModel = mongoose.model('Usuario',authSchema);
module.exports= authModel;
