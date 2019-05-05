export class UserStat {
  public money = 0;
  public level = 0;
  public levelPoint = 0;

  constructor(stats : UserStat = null){
    if(stats) {
      Object.assign(this, stats);
    }
  }

  public levelUp() : UserStat{
    this.level++;
    this.levelPoint = 0;
    return this;
  }

}
export class User {

    public firstname = "";
    public lastname = "";
    public avatar  = "";
    public stats : UserStat = null;

    constructor(options : User = null) {
        if(options) {
          Object.assign(this, options);
        }
        this.stats = new UserStat(options.stats)
    }

    public addClick(gain : number = 0, points : number = 0) : UserStat{
      if(gain && points){
        this.stats.levelPoint += points;
        this.stats.money += gain;
      }
      return this.stats;
    }



}

