import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { ShowDataComponent } from './show-data/show-data.component';


const routes: Routes = [
  {
    path : '',
    component : MyFirstComponentComponent,
  },
  {
    path : 'about/:id',
    component : AboutComponent
  },
  {
    path : 'showdata',
    component : ShowDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
