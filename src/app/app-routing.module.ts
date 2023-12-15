import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { PodiumComponent } from './components/podium/podium.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
