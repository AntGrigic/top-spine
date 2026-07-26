import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule, RevealDirective],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent {
  readonly submitted = signal(false);

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      Object.values(form.controls).forEach((c) => c.markAsTouched());
      return;
    }
    // NOTE: hook this up to an email/back-end service to actually send.
    this.submitted.set(true);
    form.resetForm();
    setTimeout(() => this.submitted.set(false), 6000);
  }
}
