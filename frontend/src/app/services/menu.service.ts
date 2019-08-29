import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class menuService {

selectedmenu:Menu;
Menu:Menu[];

readonly URL_API = 'http://162.212.130.145:3000/api/menus';
  //readonly URL_API = 'http://localhost:3000/api/opcionesmenu';

  constructor(public http: HttpClient) {
    this.selectedmenu = new Menu();
  }
  
  postmenu(menu: Menu) {
    return this.http.post(this.URL_API, menu);
  }

  getmenu() {
    return this.http.get(this.URL_API);
  }

  putmenu(menu: Menu) {
    return this.http.put(this.URL_API + `/${menu._id}`, menu);
  }

  deletemenu(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
  
  
  
  
  
  
}
