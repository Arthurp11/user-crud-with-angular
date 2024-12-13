import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

  user: User = {
      nome: '',
      email: '',
      senha: '',
      descricao: '',
    };

  constructor(private userService: UserService) { }

  onSubmit() {
    this.userService.create(this.user).subscribe((data) => {
      this.user = data;
    });
    location.reload();
  }
}
