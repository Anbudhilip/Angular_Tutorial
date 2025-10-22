import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import {App} from '../app/app';
import { NavBar} from './home-page/nav-bar/nav-bar';
import { SideBar } from './home-page/side-bar/side-bar';
import { ContentPage } from './home-page/content-page/content-page';
import { CURD } from './curd/curd';

export const routes: Routes = [

    {path:'',component:HomePage},
    {path:'about',component:AboutPage},
    {path:'content',component:ContentPage},
    {path:'curd',component:CURD}
    // {path:'**',redirectTo:''},
  //  { path: '', redirectTo: 'home', pathMatch: 'full' },
    //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
