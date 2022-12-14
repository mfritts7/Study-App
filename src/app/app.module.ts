import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { TetrisComponent } from './games/tetris/tetris.component';
import { GamesComponent } from './games/games.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TetrisComponent,
    GamesComponent,
    ToDoListComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
