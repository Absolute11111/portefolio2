import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  formData = {
    name: '',
    email: '',
    message: '',
    honeypot: '' // champ invisible
  };

  sendEmail() {
    if (this.formData.honeypot) {
      console.warn('Spam détecté, email non envoyé.');
      return; // stop si le champ est rempli (robot)
    }

    const serviceID = 'service_dtcbuun';
    const templateID = 'template_mpizpcs';
    const userID = 'NuEdGb0hedJjsfFEh';

    emailjs.send(serviceID, templateID, this.formData, userID)
      .then(() => {
        alert('✅ Email bien envoyé !');
        this.formData = { name: '', email: '', message: '', honeypot: '' }; // reset form
      }, (error) => {
        console.error('Erreur EmailJS:', error);
        alert('❌ Une erreur est survenue.');
      });
  }
}
