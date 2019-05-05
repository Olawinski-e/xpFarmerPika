import { Component, OnInit } from '@angular/core';
import { DataService } from './../../Services/data.service';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.scss']
})
export class StatistiquesComponent implements OnInit {


  constructor(public _dataService : DataService) { }

  public getCurrentMoney(level : number){
    if(this._dataService.config){
      return this._dataService.config.getGainClick(level);
    }
    else{
      return 0;
    }
  }

  ngOnInit() {
  }

}
