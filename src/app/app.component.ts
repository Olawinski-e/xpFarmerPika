import { Component, AfterViewInit, ViewChild } from "@angular/core";
import { DataService } from "./Services/data.service";
import { MatDrawer } from "@angular/material/sidenav";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  title = "xp-farmer";

  @ViewChild("sideNav") sideNav: MatDrawer;

  constructor(public _dataService: DataService) {}

  ngAfterViewInit() {
    // this._dataService.sideNav = this.sideNav;
  }
}
