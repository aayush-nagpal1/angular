import { Component } from '@angular/core';
import { RecentProduct } from './recentProduct/recentProduct.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignemnt 2';
  stock= [
    {
      "Product" : "Dell Inspiron",
      "Quantity" : "4"
    },
    {
      "Product" : "HP SL Notebook",
      "Quantity" : "3"
    }
  ]
  public recentlyAdded ={}

  share = () =>{
    let productName = (<HTMLInputElement>document.getElementById("product")).value;
    let qty = (<HTMLInputElement>document.getElementById("qty")).value;
    let item={
      "Product" : productName,
      "Quantity" : qty
    }
    this.stock.push(item);
    this.recentlyAdded = item;
  }

}
