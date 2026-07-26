import { Component, HostListener, afterNextRender, signal } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { TreatmentComponent } from './components/treatment/treatment.component';
import { ConditionsComponent } from './components/conditions/conditions.component';
import { AboutComponent } from './components/about/about.component';
import { BookingComponent } from './components/booking/booking.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    ReviewsComponent,
    TreatmentComponent,
    ConditionsComponent,
    AboutComponent,
    BookingComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly scrolled = signal(false);
  readonly railHeight = signal(0);

  constructor() {
    afterNextRender(() => this.updateScroll());
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  updateScroll(): void {
    this.scrolled.set(window.scrollY > 12);
    const doc = document.documentElement;
    const denom = doc.scrollHeight - doc.clientHeight;
    const progress = denom > 0 ? doc.scrollTop / denom : 0;
    const trackH = window.innerHeight * 0.73;
    this.railHeight.set(Math.max(0, Math.min(1, progress)) * trackH);
  }
}
