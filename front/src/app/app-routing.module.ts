import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogFormComponent } from './components/dog-form/dog-form.component';
import { DogListComponent } from './components/dog-list/dog-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dogs',
    pathMatch: 'full'
  },
  {
    path: 'dogs',
    component: DogListComponent
  },
  {
    path: "dogs/add",
    component: DogFormComponent
  },
  {
    path: 'dogs/update/:id',
    component: DogFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
