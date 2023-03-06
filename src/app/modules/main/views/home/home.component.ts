import { Component, OnDestroy } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
	constructor(private meta: Meta, private title: Title) {
		this.title.setTitle('Diplomatura en Liderazgo Coach e Inteligencia Emocional')
		this.meta.addTags([
			{
				name: 'description',
				content:
					'Esta diplomatura brinda la posibilidad de continuar la formación como Coach Ontológico en A&T y Escuela de Coaching Ontológico Rafael Echeverrya ECORE.',
			},
			{
				name: 'keywords',
				content:
					'Curso Coaching, Diplomatura Coaching, Inteligencia Emocional, Curso Inteligencia Emocional',
			},
			{
				name: 'robots',
				content: 'index, follow',
			},
			{
				name: 'og:title',
				content: 'Diplomatura en Liderazgo Coach e Inteligencia Emocional',
			},
			{
				name: 'og:type',
				content: 'website',
			},
			{
				name: 'og:image',
				content: '../../../../../assets/profiles/estudiante.png',
			},
			{ charset: 'UTF-8' },
		])
	}
	ngOnDestroy(): void {
		this.meta.removeTag("name='page.info'")
	}
}
