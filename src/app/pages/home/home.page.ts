import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonSegmentButton, IonSegment } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonSegmentButton, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, RouterLink],
})
export class HomePage {
  constructor() {}
}
