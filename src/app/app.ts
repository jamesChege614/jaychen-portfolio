import { NgFor, NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ]
})
export class App implements OnInit{
  //contacts form
  contactForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // You can send the form data via email service, backend, or third-party API
      console.log('Contact form data:', this.contactForm.value);
      this.submitted = true;
      this.contactForm.reset();
      // Optionally reset touched status etc.
    } else {
      // Mark all as touched to show validation
      this.contactForm.markAllAsTouched();
    }
  }
    //end of contact form

menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth > 768 && this.menuOpen) {
      this.menuOpen = false;
    }
  }
  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.menuOpen = false;
    }
  }


}


