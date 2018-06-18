import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
        .then((res) => {
          /*this.flashMensaje.show('Usuario logeado correctamente.',
                                {cssClass: 'alert-success', timeout: 4000});*/
          this.router.navigate(['/tienda']);
        }).catch((err) => {
          this.flashMensaje.show(err.message,
                                {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/login']);
        });
  }
}
