import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
{path:'clock',component : ClockComponent},
{path: 'games',component : GamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
