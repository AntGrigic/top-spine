import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

interface Step {
  num: string;
  tag: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-treatment',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './treatment.component.html',
  styleUrl: './treatment.component.scss',
})
export class TreatmentComponent {
  readonly steps: Step[] = [
    { num: '01', tag: 'Pregled', title: 'Razgovor i dijagnostika', text: 'Manualni dijagnostički postupci za utvrđivanje bolnih stanja i pregled liječničke dokumentacije.' },
    { num: '02', tag: 'Yumeiho', title: 'Manualna terapija', text: 'Omekšavanje mekih tkiva i vraćanje koštano-zglobnih struktura u pravilan položaj.' },
    { num: '03', tag: 'Vježbe', title: 'Kineziterapija', text: 'Individualno prilagođene vježbe za trajan rezultat, koje nastavljate i kod kuće.' },
    { num: '04', tag: 'Po potrebi', title: 'Terapijski ultrazvuk', text: 'Dopuna manualnim tehnikama i vježbama kada je klinički indicirano.' },
  ];
}
