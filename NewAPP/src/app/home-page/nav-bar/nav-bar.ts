import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchBar } from '../search-bar/search-bar';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.html',
  styleUrls: ['./nav-bar.css'],
  standalone: true,
  imports: [SearchBar]
})
export class NavBar {


}
