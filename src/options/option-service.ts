import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

export class Option {
  private static instance: Option;
  private options$: BehaviorSubject<{}> = new BehaviorSubject({});

  public static getInstance() {
    if ( !Option.instance ) {
      Option.instance = new Option();
    }
    return Option.instance;
  }

  public set(options) {
    const opt = Object.assign(this.options$.getValue(), options);
    this.options$.next(opt);
  }

  public get() {
    return this.options$.getValue();
  }

  public observable(){
    return this.options$;
  }
}

const optionService = Option.getInstance();

export { optionService };