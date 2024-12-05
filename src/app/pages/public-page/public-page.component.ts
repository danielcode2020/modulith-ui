import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-public-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './public-page.component.html',
  styleUrl: './public-page.component.css'
})
export class PublicPageComponent {

}
