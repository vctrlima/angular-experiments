import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './features/home/home.component'

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./features/home/home.module').then((m) => m.HomeModule),
        component: HomeComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
