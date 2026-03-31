import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuecatAgenticAiApplication } from './revenuecat-agentic-ai-application';

describe('RevenuecatAgenticAiApplication', () => {
  let component: RevenuecatAgenticAiApplication;
  let fixture: ComponentFixture<RevenuecatAgenticAiApplication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevenuecatAgenticAiApplication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenuecatAgenticAiApplication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
