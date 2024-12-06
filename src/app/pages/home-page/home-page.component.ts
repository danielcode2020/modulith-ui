import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FileUploadModalComponent } from '../../modals/file-upload-modal/file-upload-modal.component';
import { NgIf } from '@angular/common';
import {FileListComponent} from '../../components/file-list/file-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    FileUploadModalComponent,
    NgIf,
    FileListComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  authService = inject(AuthService);
  isModalOpen = signal(false);

  logout(): void {
    this.authService.logout();
  }

  openModal(): void {
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    console.log("received close modal event");
    this.isModalOpen.set(false);
  }
}
