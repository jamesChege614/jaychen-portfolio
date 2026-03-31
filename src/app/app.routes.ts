import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { RevenuecatAgenticAiApplication } from './blog/revenuecat-agentic-ai-application/revenuecat-agentic-ai-application';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blog/revenuecat-agentic-ai-application',
    component: RevenuecatAgenticAiApplication
  }
];