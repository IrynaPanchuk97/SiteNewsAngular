import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SportComponent } from './components/sport/sport.component';
import { YoutubeComponent } from './components/youtube/youtube.component';

@NgModule({
  declarations: [MainPageComponent, SportComponent, YoutubeComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
