import {Routes} from '@angular/router'

import { MainComponent } from './main/main.component';
import { ContadorComponent } from './contador/contador.component';
import { SaludoComponent } from './saludo/saludo.component';

export const routes = [
    {path: '', component: MainComponent},
    {path: 'contador', component: ContadorComponent},
    {path: 'saludo', component: SaludoComponent}
]