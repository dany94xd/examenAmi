export class Rol {

    constructor(_id = '', idRol = '', tipoRol = '', descripcion = '') {
        this._id = _id;
        this.idRol = idRol;
        this.tipoRol = tipoRol;
        this.descripcion = descripcion;
    }

    _id: string;
    idRol: string;
    tipoRol: string;
    descripcion: string;    
}
