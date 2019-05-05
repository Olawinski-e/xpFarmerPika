export enum BoostType {
  CLICK = "click-add",
  TIMER = "timer-auto"
}

export class Booster {
  public label = "";
  public value = 0;
  // enum = liste de possibilités
  // comme énum = une possibilité sur deux de classe Boostype
  public type: BoostType = BoostType.CLICK;
  public price: number = null;
  public actif = false;
  public timer = 60;
  public cooldown = 60;
  public level = 1;
  public nextLevelRatioValue: number = null;
  public nextLevelRatioPrice: number = null;

  constructor(options = ({} = null)) {
    if (options) {
      Object.assign(this, options);
    }
  }
}
