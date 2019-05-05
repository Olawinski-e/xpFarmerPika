import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./Components/header/header.component";
import { HomeComponent } from "./Pages/home/home.component";
import { SettingsComponent } from "./Pages/settings/settings.component";
import { ExperienceComponent } from "./Components/experience/experience.component";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { StatistiquesComponent } from "./Components/statistiques/statistiques.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { ShopComponent } from "./Components/shop/shop.component";
import { BoosterComponent } from "./Components/booster/booster.component";
import { DataService } from "./Services/data.service";
import { BoostersService } from "./Services/boosters.service";
import { FilterBoosterPipe } from "./Pipes/filter-booster.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SettingsComponent,
    ExperienceComponent,
    StatistiquesComponent,
    ShopComponent,
    BoosterComponent,
    FilterBoosterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule
  ],
  providers: [HttpClient, DataService, BoostersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
