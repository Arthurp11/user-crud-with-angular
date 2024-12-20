import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  template: `
  <app-navbar />
  <div class='global-container'>
    <router-outlet />
  </div>
  `,
})
export class AppComponent {
  title = 'user-crud-with-angular';
}
