import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { LinechartComponent} from './linechart/linechart.component';

const routes: Routes = [
  {path: "homepage", component: HomepageComponent},
  {path: "bitcoin", component: BitcoinComponent},
  {path: "linechart", component: LinechartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
