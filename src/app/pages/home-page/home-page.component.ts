import {Component, inject} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {HttpClient} from "@angular/common/http";
import {FileUploadModalComponent} from "../../modals/file-upload-modal/file-upload-modal.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    FileUploadModalComponent,
    NgIf
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  authService = inject(AuthService);
  isModalOpen = false;


  logout():void{
    this.authService.logout();
  }
  openModal(): void {
    this.isModalOpen = true;
  }
}
