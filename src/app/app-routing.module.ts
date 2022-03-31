import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPokeComponent } from './add-poke/add-poke.component';
import { PokeCrudComponent } from './poke-crud/poke-crud.component';

const routes: Routes = [
  {path: '', component:PokeCrudComponent},
  {path: 'novo', component:AddPokeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
