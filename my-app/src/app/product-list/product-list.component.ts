import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('제품정보가 공유되었습니다!');
  }

  onNotify() {
    window.alert('구매원하는 금액보다 비싼 휴대폰입니다.');
  }

}
