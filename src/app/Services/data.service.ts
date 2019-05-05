import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { MatDrawer } from '@angular/material/sidenav';
import { User } from '../Classes/user';
import { Configuration } from '../Classes/configuration';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public user : User = null;
  public config : Configuration = null;

  //Timer
  public _timeoutSaveUser : any;

  constructor(private httpClient : HttpClient) {
    this.getUser();
    this.getConfiguration();
  }

  public getUser(){
   return this.httpClient.get(environment.API_HOST + 'userConnected').subscribe((user : User) => {
     console.table(user)
      this.user = new User(user);
    }, err=> {} );
  }


  /**
   * On éxécute la requête que toute si le dernier clique date de moins de 1 seconde.
   * sinon on clear l'ancienne demande et on en créer une nouvelle;
   */
  public saveUser(){
    if(this._timeoutSaveUser){
      window.clearTimeout(this._timeoutSaveUser);
    }
    window.setTimeout(()=>{
      this.httpClient.post(environment.API_HOST + 'userConnected',this.user).subscribe();
    },1000)
  }

  /**
   * Récupération de la configuration via l'api http://locahost:3000/game
   * On créer une nouvelle "Instance" via la Class Configuration de notre objet.
   */
  public getConfiguration(){
    return this.httpClient.get(environment.API_HOST + 'game').subscribe((game : {configuration : Configuration}) => {
      this.config = new Configuration(game.configuration);
    }, err=> {} );
   }

}
