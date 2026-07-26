import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

interface Review {
  text: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent {
  readonly reviews: Review[] = [
    { text: 'Došao sam s ekstruzijom diska i preporukom za operaciju. Nakon niza tretmana i vježbi bol je nestala, a zahvat više nije bio potreban.' },
    { text: 'Godinama sam trpjela križobolju i išijas. Individualan pristup i jasno objašnjen plan terapije vratili su mi pokretljivost.' },
    { text: 'Profesionalno, temeljito i bez žurbe. Svaki dolazak počinje razgovorom i pregledom nalaza — osjećaš se sigurno.' },
    { text: 'Bol u vratu i glavobolje pratile su me mjesecima. Već nakon nekoliko tretmana osjetila sam veliku razliku.' },
    { text: 'Teniski lakat mučio me cijelu sezonu. Uz terapiju i vježbe vratio sam se treningu bez boli. Preporuka!' },
  ];
}
