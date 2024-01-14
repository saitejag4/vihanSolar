import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  phoneNumber = '9866823959';
  message = 'Hello, I want to chat with you!';

  constructor() { }

  ngOnInit(): void {
  }
  redirectToWhatsApp(): void {
    const whatsappLink = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
    window.location.href = whatsappLink;
  }

}
