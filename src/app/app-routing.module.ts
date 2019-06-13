import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainPageComponent } from "./modules/shared/components/main-page/main-page.component";

const routes: Routes = [
  {
    path: "news",
    component: MainPageComponent
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
