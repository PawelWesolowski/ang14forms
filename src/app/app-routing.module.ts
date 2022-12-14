import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BigComponent } from './big/big.component';
import { MainComponent } from './main/main.component';
import { SmallComponent } from './small/small.component';


const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'small', component: SmallComponent },
  { path: 'big', component: BigComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
