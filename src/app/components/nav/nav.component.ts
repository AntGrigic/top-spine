import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  @Input() scrolled = false;
  readonly open = signal(false);

  close(): void {
    this.open.set(false);
  }
}
