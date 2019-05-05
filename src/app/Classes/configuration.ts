import { UserStat } from "./user";

export class Configuration {

  // "levelBase": 100,
  // "levelRatio": 1.06,
  // "gainExperience": 10,
  // "gainExperienceRatio": 1.05,
  // "gainMoney": 1,
  // "gainMoneyRatio": 1.2,
  // "boosterPriceRatio" : 1.5

    public levelBase = 0;
    public levelRatio = 0;
    public gainExperience = 0;
    public gainExperienceRatio = 0;
    public gainMoney = 1;
    public gainMoneyRatio = 1.2;
    public boosterPriceRatio = 0;

    constructor(options = {} = null){
        if(options) Object.assign(this,options)
    }

    public getGainClick(level : number = 1) : number{
      return this.getGainAndPoint(level, 'gainMoney', 'gainMoneyRatio');
    }

    public getPointClick(level : number = 1) : number{
      return this.getGainAndPoint(level, 'gainExperience', 'gainExperienceRatio');
    }
    public getNecessaryPointsForLevel(level) : number{
      return this.getGainAndPoint(level, 'levelBase', 'levelRatio');
    }

    private getGainAndPoint(level, base : string, multiplicateur : string) : number{
      if(level >= 1 && this[base] && this[multiplicateur]){
        let points = this[base];
        for(let i = 1; i < level; i++ ){
          points = points * this[multiplicateur];
        }
        return Math.round(points);
      }
      return 0;
    }

    /**
     * @description Est ce que j'ai assez de point pour passer au niveaux suivant ?
     * @param userStat
     */
    public verifLevelUp(userStat : UserStat = null) : boolean{
      return userStat && userStat.levelPoint >= this.getNecessaryPointsForLevel(userStat.level)
    }

}
