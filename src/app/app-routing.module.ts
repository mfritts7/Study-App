import { getLocaleDayNames } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { GamesComponent } from './games/games.component';
import {TetrisComponent} from './games/tetris/tetris.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

const routes: Routes = [
{path:'clock',component : ClockComponent},
{path:'games',component : GamesComponent},
{path: 'games/tetris',component : TetrisComponent},
{path:'list',component: ToDoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
