import 'font-awesome/scss/font-awesome.scss';
import { optionService } from './options/option-service';
import { timer } from 'rxjs/observable/timer';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Observable } from 'rxjs/Observable';

export default class Roulette {
  start$: Observable<any>;
  private stop$: Observable<any>;

  constructor() {
    this.attachEvent();

    optionService.observable().subscribe(() => {
      console.log('observing');
    })
  }

  private attachEvent() {
    const btnStart = document.getElementById('btn_start');
    const btnStop = document.getElementById('btn_stop');

    if ( btnStart ) {
      this.start$ = fromEvent(btnStart, 'click', { passive: true })
      this.start$.subscribe(this.start);
    }

    if ( btnStop ) {
      this.stop$ = fromEvent(btnStop, 'click', { passive: true });
      this.stop$.subscribe(this.stop);
    }
  }

  public start() {
    const elList: HTMLElement | null = document.querySelector('.roulette-card__list');

    if ( elList ) {
      console.log('start');
      elList.style.animationPlayState = 'running';
    }
  }

  public stop() {
    const elList: HTMLElement | null = document.querySelector('.roulette-card__list');

    if ( elList ) {
      console.log('stop');
      elList.style.animationPlayState = 'paused';
    }
  }
}