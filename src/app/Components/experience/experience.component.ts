import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {



  @ViewChild('progressBar') progressBar : ElementRef = null;

  constructor(public _dataService : DataService) {

  }


  ngOnInit() {

  }
  public getAvancementInformation() : string{
    if(this._dataService.user){
      let level = this._dataService.user.stats.level;
      return this._dataService.user.stats.levelPoint +' / '+ this._dataService.config.getNecessaryPointsForLevel(level);
    }
    return "0 / 0";
  }



  public getPourcentage() : number{
    if(this._dataService.user){
      let level = this._dataService.user.stats.level;
      let percent = Math.round(this._dataService.user.stats.levelPoint * 100 / this._dataService.config.getNecessaryPointsForLevel(level));
      if(this.progressBar){
        this.progressBar.nativeElement.style.width = percent+"%";
      }
      return percent;
    }
    return 0;
  }


}
