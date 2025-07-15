import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPostagemComponent } from './lista-postagem.component';
import { RouterModule, Routes } from '@angular/router';

const rotas: Routes =[
  {
    path:"", component: ListaPostagemComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(rotas)
  ]
})
export class ListaPostagemModule { }
