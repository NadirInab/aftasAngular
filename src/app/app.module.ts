import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { PodiumComponent } from './components/podium/podium.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { LevelComponent } from './components/level/level.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FishComponent } from './components/fish/fish.component';
import { MemberComponent } from './components/member/member.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    PodiumComponent, 
    CompetitionComponent, LevelComponent, FishComponent, MemberComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
