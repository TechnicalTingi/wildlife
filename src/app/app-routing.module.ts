import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './features/404/errorpage/errorpage.component';

const routes: Routes = [
  {path:'**', component:ErrorpageComponent},
 { path: '',
    redirectTo: '',
    pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
