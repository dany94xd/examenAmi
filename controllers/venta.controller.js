const Venta = requiere('../models/venta');

const ventasCtrl = {};

ventasCtrl.getVentas = async (req, res, next) => {
    const ventas = await Venta.find();
    res.json(ventas);
}

ventasCtrl.createVenta = async (req, res, next) => {
    const venta = new Venta ({
        idVenta: req.body.idVenta,
        idProducto: req.body.idProducto,
        costodeProducto: req.body.costoTotalProducto,
        costoTotalVendido: req.body.costoTotalVendido,
        numerodeproductosvendidos:req.body.numerodeproductosvendidos,
        fechaventa: req.body.fechaventa
    });
    await venta.save();
    res.json({status: 'Venta Creada'});
}

ventasCtrl.getVenta = async (req, res, next) => {
    const { id }  = req.params;
    const venta = await Venta.findById(id);
    res.json(venta);
}

ventasCtrl.editVenta = async (req, res, next) => {
    const { id }  = req.params;
    const venta = {
        idVenta: req.body.idVenta,
        idProducto: req.body.idProducto,
        costodeProducto: req.body.costoTotalProducto,
        costoTotalVendido: req.body.costoTotalVendido,
        numerodeproductosvendidos:req.body.numerodeproductosvendidos,
        fechaventa: req.body.fechaventa
    }
    await Venta.findByIdAndUpdate(id, {$set: venta}, {new: true});
    res.json({status: 'Venta Updated'});
}

ventasCtrl.deleteVenta = async (req, res, next) => {
    await Venta.findByIdAndRemove(req.params.id);
    res.json({status: 'Venta Deleted'});
}

module.exports = ventasCtrl;