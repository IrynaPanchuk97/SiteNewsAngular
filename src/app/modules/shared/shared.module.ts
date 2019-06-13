import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { SportComponent } from "./components/sport/sport.component";
import { YoutubeComponent } from "./components/youtube/youtube.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { BrowserModule } from "@angular/platform-browser";
@NgModule({
  declarations: [MainPageComponent, SportComponent, YoutubeComponent],
  imports: [CommonModule, BrowserModule, MDBBootstrapModule.forRoot()],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
