import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CapitalComponent } from './countries/pages/capital/capital.component';
import { CountryComponent } from './countries/pages/country/country.component';
import { RegionComponent } from './countries/pages/region/region.component';
import { SeeCountryComponent } from './countries/pages/see-country/see-country.component';

const routes: Routes = [
  {
  path:"",
  component:CountryComponent,
  pathMatch: "full"
  },
  {
    path:"region",
    component:RegionComponent
  },
  {
    path: "capital",
    component: CapitalComponent
  },
  {
    path: "country/:id",
    component: SeeCountryComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

