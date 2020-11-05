import {Routes} from '@angular/router';

import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import { MembersComponent } from '../members/members.component';
import { ShopComponent } from '../shop/shop.component';

export const routes :Routes = [
    {path:'home', component:HomeComponent},
    {path:'shop' , component: ShopComponent},
    {path:'about' , component: AboutComponent},
    {path:'members' , component: MembersComponent},
    {path:'contact' , component: ContactComponent},
    {path:'' , redirectTo: '/home', pathMatch:'full'}
] 