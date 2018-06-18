import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-page-barra',
  templateUrl: './page-barra.component.html',
  styleUrls: ['./page-barra.component.css']
})
export class PageBarraComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { 
    
  }

  ngOnInit() {
  }

  onClickLogout() {
    this.authService.logout();
  }


}
