import { Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ListaComponent } from './components/lista/lista.component';
import { EdicaoComponent } from './components/edicao/edicao.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'user_create', component: CadastroComponent},
    { path: 'users', component: ListaComponent},
    { path: 'user_edit/:id', component: EdicaoComponent}
];
