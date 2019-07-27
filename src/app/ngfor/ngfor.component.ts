import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  animais:Array<any> = [
    {tipo:'Cachorro', nome: 'Isabô', idade:5},
    {tipo:'Gato', nome: 'Fred', idade:3},
    {tipo:'Pato', nome: 'Donald', idade:7}
  ];

  constructor() { }

  ngOnInit() {
  }

}
