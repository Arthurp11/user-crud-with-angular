import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edicao',
  imports: [FormsModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.scss'
})
export class EdicaoComponent implements OnInit{

  id!: string;

  user: User = {
    nome: '',
    email: '',
    senha: '',
    descricao: '',
  };

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.user.id = parseInt(this.id);
    this.userService.getUser(this.user).subscribe((data) => {
      this.user = data;
    });
  }

  onSubmit() {
    this.userService.update(this.user).subscribe((data) => {
      this.user = data;
    });
    location.reload();
  }
}
