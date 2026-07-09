import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Client } from 'src/app/interfaces/client.interface';
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
    phone:''
  };

  mensajeValidacion:string = '';

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

}
