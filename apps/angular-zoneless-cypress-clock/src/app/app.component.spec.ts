import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, NxWelcomeComponent, RouterModule.forRoot([])],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();
  });

  it(`should have as title 'angular-zoneless-cypress-clock'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-zoneless-cypress-clock');
  });
});
