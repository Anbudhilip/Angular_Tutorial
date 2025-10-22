import { Component } from '@angular/core';
import { SearchBar } from '../search-bar/search-bar';
@Component({
  selector: 'app-nav-bar',
  imports: [SearchBar],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {

}
