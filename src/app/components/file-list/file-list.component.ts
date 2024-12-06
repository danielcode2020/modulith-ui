import {Component, Input} from '@angular/core';
import {FileService} from '../../services/document/file-service.services';
import {DatePipe, NgForOf} from '@angular/common';
import {HttpResponse} from '@angular/common/http';
import {IStorageFile} from './storage-file.interface';

export type EntityArrayResponseType = HttpResponse<IStorageFile[]>;


@Component({
  selector: 'app-file-list',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf
  ],
  templateUrl: './file-list.component.html',
  styleUrl: './file-list.component.css'
})
export class FileListComponent {
  files: IStorageFile[] = [];
  page = 0;
  size = 10;
  totalCount = 0;

  @Input()
  set refreshListEvent(event: Event) {
    console.log("received refreshEvent")
    if (event) {
      this.loadFiles();
    }
  }

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    this.loadFiles();
  }

  loadFiles(): void {
    this.fileService.getFiles(this.page, this.size).subscribe(response => {
      console.log(response.body);
      this.files = response.body || [];
      console.log(this.files);
      // this.totalCount = parseInt(response.headers.get('X-Total-Count') || '0', 10);
      this.totalCount = 2;
    });
  }

  nextPage(): void {
    if ((this.page + 1) * this.size < this.totalCount) {
      this.page++;
      this.loadFiles();
    }
  }

  previousPage(): void {
    if (this.page > 0) {
      this.page--;
      this.loadFiles();
    }
  }
}
