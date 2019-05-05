import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/Services/data.service";
import { BoostersService } from "src/app/Services/boosters.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(
    public _dataService: DataService,
    public _boosterService: BoostersService
  ) {}

  /**
   * On calcul combien on doit gagner en argent
   * On calcul combien on doit gagner en experience
   * On met à jour l'utilisateur avec les différente informations
   * On vérifie si on doit monter de niveau et si c'est le cas on le fait
   * A la fin on met à jour l'utilisateur
   */
  public click() {
    if (this._dataService.user) {
      // Calculer les différentes informaitons nécessaire
      let level = this._dataService.user.stats.level;
      let gain = this._dataService.config.getGainClick(level);
      let point = this._dataService.config.getPointClick(level);
      // Mettre notre user.
      let updatedStats = this._dataService.user.addClick(gain, point);
      console.log(this._dataService.user);
      if (this._dataService.config.verifLevelUp(updatedStats)) {
        this._dataService.user.stats.levelUp();
      }
      this._dataService.saveUser();
    }
  }

  ngOnInit() {}
}
