import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

// definindo o decorator do component
// selector: conforme definido em 'angular.json', deve ser adicionado o prefixo 'app' no seletor
// templateUrl: path para o html do component
// styleUrls: pode ser passado um array de arquivos css do component
@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss'],
})

// exportando o component
export class NovaTransferenciaComponent {

  @Output() aoTransferir: EventEmitter<any> = new EventEmitter();

  // com o strictPropertyInitialization ativo, é preciso informar que o value dos atributos não é null/undefined com o '!'
  valor!: number;
  destino!: number;

  transferir() {
    console.log('Solicitada nova transferência');

    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir);

    this.limparCampos();
  }
  limparCampos() {

    this.valor = 0;
    this.destino = 0;
  }
}
