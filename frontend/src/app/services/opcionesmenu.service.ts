import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OpcionesMenu } from '../models/opcionesmenu';

@Injectable({
  providedIn: 'root'
})
export class OpcionesmenuService {

selectedOpcionesmenu:OpcionesMenu;
opcionesMenu:OpcionesMenu[];

readonly URL_API = 'http://162.212.130.145:3000/api/opcionesmenu';
  //readonly URL_API = 'http://localhost:3000/api/opcionesmenu';

  constructor(public http: HttpClient) {
    this.selectedOpcionesmenu = new OpcionesMenu();
  }
  
  postOpcionesmenu(opcionesmenu: OpcionesMenu) {
    return this.http.post(this.URL_API, opcionesmenu);
  }

  getOpcionesmenus() {
    return this.http.get(this.URL_API);
  }

  putOpcionesmenu(opcionesmenu: OpcionesMenu) {
    return this.http.put(this.URL_API + `/${opcionesmenu._id}`, opcionesmenu);
  }

  deleteOpcionesmenu(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
  
  
  
  
  
  
}
