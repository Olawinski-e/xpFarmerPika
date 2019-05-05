import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { Booster } from "src/app/Classes/booster";

@Component({
  selector: "app-booster",
  templateUrl: "./booster.component.html",
  styleUrls: ["./booster.component.scss"]
})
export class BoosterComponent implements OnInit {
  //prends la variable et stocke la (2 façons de faire, possibilité d'injecter d'autres codes dans la synt  xe longue)
  @Input("passBooster") booster: Booster = null;
  // public booster: Booster = null;
  // @Input("passBooster") set passbooster(value) {
  //   this.booster = value;
  // }

  public inProgress = false;
  public timer: any = null;
  public timerProgress: number = 0;

  public runBooster() {
    if (!this.inProgress) {
      this.timer = window.setInterval(() => {
        this.inProgress = true;
        this.timerProgress++;
        if (this.timerProgress == this.booster.timer) {
          this.timerProgress = 0;
          this.inProgress = false;
          window.clearInterval(this.timer);
        }
      }, 1000); 
    }
  }

  constructor() {}

  public _timer: boolean = false;

  ngOnInit() {}
}
