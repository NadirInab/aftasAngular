import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { PodiumComponent } from './components/podium/podium.component';
import { LevelComponent } from './components/level/level.component';
import { FishComponent } from './components/fish/fish.component';

const routes: Routes = [
  {
    path : '', 
    component : HomeComponent, 
    title : 'Home Page'
  }, 
  {
    path : 'competition', 
    component : CompetitionComponent, 
    title : 'Competition Page'
  }, 
  {
    path : 'podium', 
    component : PodiumComponent, 
    title : 'Podium Page'
  },
  {
    path : 'level', 
    component : LevelComponent, 
    title : 'Level Page'
  }, 
  {
    path : 'fish', 
    component : FishComponent, 
    title : 'Fish Page'
  }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
