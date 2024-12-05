import {Component, inject} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  authService = inject(AuthService);

  logout():void{
    this.authService.logout();
  }
}
