import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EntityArrayResponseType} from '../../components/file-list/file-list.component';
import {IStorageFile} from '../../components/file-list/storage-file.interface';

const BASE_API = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  http = inject(HttpClient);

  ngOnInit() {
    this.getFiles(1,10);
  }
  getFiles(page:number, size: number): Observable<EntityArrayResponseType> {
    return this.http.get<IStorageFile[]>(`${BASE_API}my/files?page=${page}&size=${size}`, { observe: 'response' });
  }
}
