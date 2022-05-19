import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {PRODUCTS} from "./interface/item.mock";
import {IProduct} from "./interface/item.interface";
import {ProductComponent} from "./prodcut/product.component";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit,AfterViewInit {
  public products = [...PRODUCTS];
  public productCart: IProduct[] = [];
  @ViewChild('resetCartButton') resetCartButton?: ElementRef<HTMLButtonElement>;
  @ViewChildren(ProductComponent) productsComponentList!:  QueryList<ProductComponent>
  constructor() {
  }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
  this.printButton()
  }

  addToCart(product: IProduct) {
    this.productCart.push(product);
    this.printButton();
  }

  removeFromCart(id: string) {
    this.productCart = this.productCart.filter(p => p.id !== id);
  }

  private printButton(){
    console.log(this.resetCartButton?.nativeElement.innerHTML);
    console.log('productsComponentList', this.productsComponentList?.length);
    const {first} = this.productsComponentList;
    first.print();
  }


}
