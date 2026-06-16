import { NgIf } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'home-root',
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {

  contactForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngAfterViewInit(): void {

    const items: NodeListOf<Element> = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    items.forEach((item) => observer.observe(item));
  }

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
      this.submitted = true;
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
