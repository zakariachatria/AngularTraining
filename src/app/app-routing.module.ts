import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent }      from './hero-detail/hero-detail.component';


const routes: Routes = [
  { path: 'zaki', component: HeroDetailComponent }
];
@NgModule({
  exports: [ RouterModule ]
})




export class AppRoutingModule {}