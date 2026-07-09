import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { Clients } from 'src/app/services/clients';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class ClientsPage {

  clients: any[] = [];

  constructor( private service: Clients ) { }

  async ionViewWillEnter() {
    this.clients = await this.service.getClients();
  }

  async delete(id: number) {
    if (
      confirm(
        '¿Seguro que desea eliminar cliente con id '+id+'?'
      )
    ) {
      await this.service.deleteClient(id);

      this.clients = await this.service.getClients();
    }
  }

}
