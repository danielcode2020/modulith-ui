import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-file-upload-modal',
  templateUrl: './file-upload-modal.component.html',
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./file-upload-modal.component.css']
})
export class FileUploadModalComponent {
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  // Handle file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Data = btoa(String.fromCharCode(...new Uint8Array(reader.result as ArrayBuffer)));

        const uploadDto = {
          filename: this.selectedFile!.name,
          contentType: this.selectedFile!.type,
          data: base64Data  // Send the base64 string
        };

        this.http
          .post<void>('http://localhost:8080/api/upload-single', uploadDto)
          .subscribe({
            next: () => {
              alert('File uploaded successfully');
              this.closeModal();
            },
            error: (err) => {
              console.error('Upload failed', err);
              alert('Failed to upload file');
            }
          });
      };
      reader.readAsArrayBuffer(this.selectedFile);
    }
  }

  // Close the modal
  closeModal(): void {
    // Logic to close the modal (e.g., emit an event or use a modal service)
  }
}

