import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Client } from 'src/app/interfaces/client.interface';
import { Clients } from 'src/app/services/clients';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.page.html',
  styleUrls: ['./edit-client.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EditClientPage {

  id: number = 0;
  client: Client = {
    name: '',
    email: '',
    phone: '',
    //idComunidadAutonoma: 0,
    //idProvincia: 0
  };

  mensajeValidacion:string = '';

  constructor(private route: ActivatedRoute, private router: Router, private service: Clients) { }

  async ionViewWillEnter() {
    this.loadClient();
  }

  async loadClient() {
    this.id =  Number( this.route.snapshot.paramMap.get('id') );
    this.client = await this.service.getClient(this.id);
  }

  async save() {
    const correo = this.client.email;
    if (correo.indexOf('@') == -1 ) {
      this.mensajeValidacion = "Formato inválido email";
      return;
    }
    await this.service.updateClient(this.id, this.client);

    this.router.navigate( ['/clients'] );
  }

}
