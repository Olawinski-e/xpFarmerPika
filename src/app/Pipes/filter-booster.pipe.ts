import { Pipe, PipeTransform } from "@angular/core";
import { Booster } from "../Classes/booster";

@Pipe({ name: "filterBooster" })
export class FilterBoosterPipe implements PipeTransform {
  transform(boosters: Booster[], buy: boolean): Booster[] {
    return boosters.filter(booster => booster.actif == buy);
  }
}
 