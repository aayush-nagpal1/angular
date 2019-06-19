import { Component, Input } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'recentProduct',
  templateUrl: './recentProduct.component.html',
  styleUrls: ['./recentProduct.component.css']
})
export class RecentProduct {
    @Input() public parentData
    getProductData =() =>{
        axios.get('http://localhost:3000/products')
        .then(response =>{
            return response.data
        })
    }
    data = this.getProductData()

}