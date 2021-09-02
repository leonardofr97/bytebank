import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  // define transferencia como um atributo de ExtratoComponent
  @Input() transferencia: any;

  constructor() { }

  ngOnInit(): void {
  }

}
