import { Component, OnInit } from '@angular/core';
import {DataService} from '../../Services/data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(public _dataService : DataService) { }

  ngOnInit() {

  }

}
