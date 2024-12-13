import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent implements OnInit{

  users: User[] = [];

  constructor(private userService: UserService){}

  //ao iniciar carrega var user com dados
  ngOnInit(): void{
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
