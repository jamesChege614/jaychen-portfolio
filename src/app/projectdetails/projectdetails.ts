import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  layoutFlow: string;
  challenges: string;
}

@Component({
  selector: 'app-projectdetails',
  imports: [],
  templateUrl: './projectdetails.html',
  styleUrl: './projectdetails.css'
})
export class Projectdetails implements OnInit {
  project: Project | undefined;
  projects: Project[] = [
    {
      id: '1',
      title: 'CI/CD Pipeline Setup',
      shortDescription: 'Automated builds, tests and deployment with rollback support',
      longDescription: 'In this project I set up ...',
      imageUrl: 'assets/projects/cicd.png',
      layoutFlow: 'Flow: Build → Test → Deploy → Monitor',
      challenges: 'Challenge: handling rollback when test fails, etc'
    },
    // other project entries...
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = this.projects.find(p => p.id === id);
  }

  goBack() {
    this.router.navigate(['/projects']);
  }
}
