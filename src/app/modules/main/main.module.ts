import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// This Module Imports
import { MainRoutingModule } from './main-routing.module'
import { ContactFormComponent } from '@main/components'
import { HomeComponent } from '@main/views'

const views = [HomeComponent]
const components = [ContactFormComponent]

@NgModule({
	declarations: [...views, ...components],
	imports: [CommonModule, MainRoutingModule, FormsModule, ReactiveFormsModule],
})
export class MainModule {}
