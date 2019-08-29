import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { OpcionesmenuService } from '../../services/opcionesmenu.service';
import { OpcionesMenu } from '../../models/opcionesmenu';

declare var M: any;

@Component({
  selector: 'app-opcionesmenus',
  templateUrl: './opcionesmenus.component.html',
  styleUrls: ['./opcionesmenus.component.css']
})
export class OpcionesmenusComponent implements OnInit {

  constructor(public opcionesmenuService: OpcionesmenuService) { }

  ngOnInit() {
    this.getOpcionesmenus();
  }

  addOpcionesmenu(form?: NgForm){    
 console.log(form.value);
    if(form.value._id) {
      this.opcionesmenuService.putOpcionesmenu(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getOpcionesmenus();
          M.toast({html: 'Opcionesmenu actualizado'});
        });
    } else {
      this.opcionesmenuService.postOpcionesmenu(form.value)
      .subscribe(res => {
        this.getOpcionesmenus();
        this.resetForm(form);
        M.toast({html: 'Opcionesmenu Guardado'});
      });
    }
    
  }



  getOpcionesmenus() {
    this.opcionesmenuService.getOpcionesmenus()
      .subscribe(res => {
        this.opcionesmenuService.opcionesMenu = res as OpcionesMenu[];
      });
  }

  editOpcionesmenu(opcionesmenu: OpcionesMenu) {
    this.opcionesmenuService.selectedOpcionesmenu = opcionesmenu;
  }

  deleteOpcionesmenu(_id: string, form: NgForm) {
    if(confirm('¿Esta seguro de eliminar?')) {
      this.opcionesmenuService.deleteOpcionesmenu(_id)
        .subscribe(res => {
          this.getOpcionesmenus();
          this.resetForm(form);
          M.toast({html: 'Eiminado'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.opcionesmenuService.selectedOpcionesmenu = new OpcionesMenu();
    }
  }







}
