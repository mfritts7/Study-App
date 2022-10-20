import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { TetrisComponent } from './games/tetris/tetris.component';
import { GamesComponent } from './games/games.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TetrisComponent,
    GamesComponent,
    ToDoListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
