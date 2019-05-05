import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Booster } from "../Classes/booster";
import { environment } from "./../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class BoostersService {
  public boosters: Booster[] = [];

  constructor(private httpClient: HttpClient) {
    this.getBooster();
  }

  public getBooster() {
    return this.httpClient.get(environment.API_HOST + "boosters").subscribe(
      (boosters: Booster[]) => {
        this.boosters = boosters.map(booster => new Booster(booster));
      },
      err => {}
    );
  }
}
