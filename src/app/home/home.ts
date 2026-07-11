import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'home-root',
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true,
  imports: []
})
export class HomeComponent implements AfterViewInit {

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

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
