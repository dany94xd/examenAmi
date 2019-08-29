const Vendedor = require('../models/vendedor');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'secretkey94'

//mongoose.set('useCreateIndex',true);

const vendedorCtrl = {};

vendedorCtrl.getVendedores = async (req, res, next) => {
    const vendedores = await Vendedor.find();
    res.json(vendedores);
};

vendedorCtrl.createVendedor = async (req, res, next) => {
    const vendedor = new Vendedor({
        idUser: req.body.idUser,
        idPersona: req.body.idPersona,
        idLogros: req.body.idLogros,
        NroVentas: req.body.NroVentas,
        salario: req.body.salario,
        user: req.body.user,
        password: req.body.password,
        //password: bcrypt.hashSync(req.body.password),
        email: req.body.email
    });
    await vendedor.save();
    res.json({ status: 'Vendedor created' });
};

vendedorCtrl.getVendedor = async (req, res, next) => {
    const { id } = req.params;
    const vendedor = await Vendedor.findById(id);
    res.json(vendedor);
};

vendedorCtrl.editVendedor = async (req, res, next) => {
    const { id } = req.params;
    const vendedor = {

        idUser: req.body.idUser,
        idPersona: req.body.idPersona,
        idLogros: req.body.idLogros,
        //matricula: req.body.matricula,
        NroVentas: req.body.NroVentas,
        salario: req.body.salario,
        user: req.body.user,
        password: req.body.password,
        //password: bcrypt.hashSync(req.body.password),
        email: req.body.email
        // password: req.body.password
       // password: bcrypt.hashSync(req.body.password),
       
    };
    await Vendedor.findByIdAndUpdate(id, { $set: vendedor }, { new: true });
    res.json({ status: 'Vendedor Updated' });
};





vendedorCtrl.deleteVendedor = async (req, res, next) => {
    await Vendedor.findByIdAndRemove(req.params.id);
    res.json({ status: 'Vendedor Deleted' });
};


//Register
vendedorCtrl.registerVendedor = async (req, res, next) => {
    const newVendedor = new Vendedor({
        user: req.body.user,
        password: bcrypt.hashSync(req.body.password)
    })
    Vendedor.create = (newVendedor, (err, user) => {
        if (err) return res.status(500).send('server error');
        const expiresIn = 24 * 60 * 60;
        const accesToken = jwt.sign({ id: user.id },
            SECRET_KEY, {
                expiresIn: expiresIn
            });
        const dataUser = {
            user: user.user,
            accesToken: accesToken,
            expiresIn: expiresIn
        }

        //response
        //res.send({user});
        res.send({ dataUser });

    })

}


///login 


vendedorCtrl.loginVendedor = (req, res, next) => {
    const userData = {
        user: req.body.user,
        password: req.body.password
    }

    Vendedor.findOne({ user: userData.user }, (err, user) => {
        if (err) return res.status(500).send('error en servidor');
        if (!user) {
            //email does not exist
            res.status(409).send({ message: 'somthing is worng' });

        } else {
            const resultPassword = bcrypt.compareSync(userData.password, user.password);
            if (resultPassword) {
                const expiresIn = 24 * 60 * 60;
                const accesToken = jwt.sign({ id: user.id }, SECRET_KEY, {
                    expiresIn: expiresIn
                });

                const dataUser = {
                    user: user.user,
                    idPersona: user.idPersona,
                    idLogros: user.idLogros,
                    NroVentas: user.NroVentas,
                    email: user.email,
                    accesToken: accesToken,
                    expiresIn: expiresIn
                }
                res.send({ dataUser })
            } else {
                //paswword wrong
                res.status(409).send({ message: "error de password" });
            }
        }
    })
}
module.exports = vendedorCtrl;
