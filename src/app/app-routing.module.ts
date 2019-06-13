import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainPageComponent } from "./modules/shared/components/main-page/main-page.component";
import { SportComponent } from "./modules/shared/components/sport/sport.component";
import { YoutubeComponent } from "./modules/shared/components/youtube/youtube.component";

const routes: Routes = [
  {
    path: "news",
    component: MainPageComponent
  },
  {
    path: "sport",
    component: SportComponent
  },
  {
    path: "YouTube",
    component: YoutubeComponent
  },
  {
    path: "**",
    redirectTo: "/news"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
