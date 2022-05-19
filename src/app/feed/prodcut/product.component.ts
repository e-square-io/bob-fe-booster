import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {IProduct} from "../interface/item.interface";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-product [product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  interval: any;
  @Input() product?: IProduct;
  @Input() isCart?: boolean;
  @Output() addToCart = new EventEmitter<IProduct>();
  @Output() removeFromCart = new EventEmitter<string>();

  constructor(private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    if (this.isCart) {
      this.interval = setInterval(() => {
        console.count('interval');
      }, 1000);
    }
  }

  onAddClicked() {
    this.addToCart.emit(this.product);
  }

  onRemoveClicked() {
    this.removeFromCart.emit(this.product?.id);
  }

  public print() {
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 3 * 1000,
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}


@Component({
  selector: 'snack-bar-component-example-snack',
  template: '<h1>Print</h1>',
  styles: [
    `
      .example-pizza-party {
        color: hotpink;
      }
    `,
  ],
})
export class PizzaPartyComponent {
}
