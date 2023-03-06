// Angular Imports
import { NgModule } from '@angular/core'
import { ExtraOptions, RouterModule, Routes } from '@angular/router'
const routerOptions: ExtraOptions = {
	useHash: false,
	anchorScrolling: 'enabled',
	// ...any other options you'd like to use
}
const routes: Routes = [
	{
		path: '',
		redirectTo: 'main',
		pathMatch: 'full',
	},
	{
		path: 'main',
		loadChildren: () => import('./modules/main/main.module').then((m) => m.MainModule),
	},
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			initialNavigation: 'enabledBlocking',
			useHash: false,
			anchorScrolling: 'enabled',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
