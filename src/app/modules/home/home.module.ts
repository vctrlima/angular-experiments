import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home.routes'
import { ChildComponent } from './child/child.component'

@NgModule({
    declarations: [HomeComponent, ChildComponent],
    imports: [CommonModule, HomeRoutingModule, FormsModule],
    exports: [HomeComponent, ChildComponent],
})
export class HomeModule {}
