import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Client } from 'src/app/interfaces/client.interface';
import { Comunidad } from 'src/app/interfaces/comunidad.interface';
import { Provincia } from 'src/app/interfaces/provincia.interface';
import { Clients } from 'src/app/services/clients';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.page.html',
  styleUrls: ['./new-client.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NewClientPage {

  client:Client = {
    name:'',
    email:'',
    phone:'',
    //idComunidadAutonoma: 0,
    //idProvincia: 0
  };

  mensajeValidacion:string = '';

  comunidades: Comunidad[] = [
    { id: 1, nombre: 'Comunidad de Madrid' },
    { id: 2, nombre: 'Cataluña' }
  ];
  
  todasProvincias: Provincia[] = [
    { id: 1, nombre: 'Madrid', idComunidad: 1 },
    { id: 2, nombre: 'Barcelona', idComunidad: 2 },
    { id: 3, nombre: 'Girona', idComunidad: 2 }
  ];

  provinciasFiltradas: Provincia[] = [];

  constructor(private service: Clients, private router: Router) { }

  async ionViewWillEnter() {
  }

  async save() {
    const correo = this.client.email;
    if (correo.indexOf('@') == -1 ) {
      this.mensajeValidacion = "Formato inválido email";
      return;
    }
    await this.service.addClient( this.client );

    this.router.navigate( ['/clients'] );
  }

  cargarProvinciasPorComunidad(event: any) {
    // Capturamos el id de la provincia seleccionada desde el evento
    const idComunidad = Number(event.target.value);
    console.log("Cargando provincias de la comunidad : "+idComunidad);
    
    // Filtramos los municipios que corresponden a esa provincia
    this.provinciasFiltradas = this.todasProvincias.filter(
      (prv) => prv.idComunidad === idComunidad
    );

  }

}
