import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transferencias: any[] = [];

  transferir($event:any) {
    console.log($event);

    // add no objeto transferencia os dados de valor e destino + a data atual e faz o push no array
    const transferencia = {...$event, data: new Date()};
    this.transferencias.push(transferencia);
  }
}
