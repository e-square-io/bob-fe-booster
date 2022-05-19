import {Component, OnInit} from '@angular/core';
import {PRODUCTS} from "./interface/item.mock";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  public products = PRODUCTS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
