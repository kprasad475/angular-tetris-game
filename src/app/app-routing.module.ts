import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { BoardComponent } from './board/board.component';
import { ControlsComponent } from './controls/controls.component';

const routes: Routes = [{ path: 'game', component: GameComponent },
  { path: 'board', component: BoardComponent },
  { path: 'controls', component: ControlsComponent },
  { path: '', redirectTo: '/board', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
