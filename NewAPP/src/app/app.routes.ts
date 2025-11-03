
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import {App} from '../app/app';
import { NavBar} from './home-page/nav-bar/nav-bar';
import { SideBar } from './home-page/side-bar/side-bar';
import { ContentPage } from './home-page/content-page/content-page';
import { CURD } from './curd/curd';
import { CURDHTTP } from './curdhttp/curdhttp';
import { Edit } from './curdhttp/edit/edit';
import { Create } from './curdhttp/create/create';


export const routes: Routes = [

    {path:'',component:HomePage},
    {path:'about',component:CURDHTTP},
    {path:'content',component:ContentPage},
    {path:'curd',component:CURD},
    {path:'curds',component:CURDHTTP},
    {path:'curds/create',component:Create },
    {path:'curds/edit/:TopicId',component:Edit}  
      // children :
      // [
      //   {path:'create',component:Create },
      //   {path:'edit/:TopicId',component:Edit}   // children route create httpcurd view and insert the routelet
      // ]}
    // {path:'**',redirectTo:''},
  //  { path: '', redirectTo: 'home', pathMatch: 'full' },
    //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      // dynamic topic routes
 // { path: 'topics/:topic', component: TopicDetailComponent }
];
