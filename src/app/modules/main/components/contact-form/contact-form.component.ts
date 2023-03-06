import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
	showSuccessAlert: boolean = false
	contactForm: FormGroup
	constructor(private _formBuilder: FormBuilder) {
		this.contactForm = this._formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			name: ['', [Validators.required, Validators.minLength(3)]],
			lastName: ['', [Validators.required, Validators.minLength(3)]],
			phoneNumber: ['', [Validators.required, Validators.minLength(6)]],
		})
	}

	sendContact() {
		console.log(this.contactForm.value)
		this.showSuccessAlert = true
	}
}
