import { Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ListaComponent } from './components/lista/lista.component';

export const routes: Routes = [
    { path: 'create', component: CadastroComponent},
    { path: 'user-list', component: ListaComponent}
];
