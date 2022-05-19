import {Component, Input, OnInit} from '@angular/core';
import {IItem} from "../interface/item.interface";

@Component({
  selector: 'app-prodcut [product]',
  templateUrl: './prodcut.component.html',
  styleUrls: ['./prodcut.component.scss']
})
export class ProdcutComponent implements OnInit {

  @Input() product?:IItem
  constructor() { }

  ngOnInit(): void {
  }

}
