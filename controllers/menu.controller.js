const Menu = require('../models/menu');

const MenuCtrl = {};

MenuCtrl.getMenus = async (req, res, next) => {
    const menus = await Menu.find();
    res.json(menus);
};

MenuCtrl.createMenu = async (req, res, next) => {
    const menus = new Menu({
        idMenu: req.body.idMenu,
        idRol:req.body.idRol
    });
    await menus.save();
    //res.json({status: 'menu created'});
    res.json({status: menus.idRol});
};

MenuCtrl.getMenu = async (req, res, next) => {
    const { id } = req.params;
    const menus = await Menu.findById(id);
    res.json(menus);
};

MenuCtrl.editMenu = async (req, res, next) => {
    const { id } = req.params;
    const menus = {
        idMenu: req.body.idMenu,
        idRol:req.body.idRol
    };
    await Menu.findByIdAndUpdate(id, {$set: menus}, {new: true});
    res.json({status: 'menu Updated'});
};

MenuCtrl.deleteMenu = async (req, res, next) => {
    await Menu.findByIdAndRemove(req.params.id);
    res.json({status: 'menu Deleted'});
};

module.exports = MenuCtrl;