import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BigComponent } from './big/big.component';
import { MainComponent } from './main/main.component';
import { SmallComponent } from './small/small.component';
import {BothComponent} from "./both/both.component";


const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'small', component: SmallComponent },
  { path: 'big', component: BigComponent },
  { path: 'both', component: BothComponent},
  { path: '', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
