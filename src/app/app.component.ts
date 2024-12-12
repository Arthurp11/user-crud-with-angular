import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CadastroComponent],
  template: `
  <router-outlet />
  `,
})
export class AppComponent {
  title = 'user-crud-with-angular';
}
