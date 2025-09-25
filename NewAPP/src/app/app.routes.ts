import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import {App} from '../app/app';

export const routes: Routes = [

    {path:'',component:HomePage},
    {path:'about',component:AboutPage},
    {path:'**',redirectTo:''}
];
