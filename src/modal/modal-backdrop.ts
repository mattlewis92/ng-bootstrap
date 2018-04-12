import {Component, Input} from '@angular/core';
import {trigger, transition, useAnimation} from '@angular/animations';
import {fadeIn, fadeOut} from '../animations/fade';
import {AnimationsHelper} from '../util/animations-helper';

@Component({
  selector: 'ngb-modal-backdrop',
  template: '',
  host: {
    'class': '"modal-backdrop fade show" + (backdropClass ? " " + backdropClass : "")',
    '[@modalBackdrop]': 'animationsHelper.state',
    '(@modalBackdrop.done)': 'animationsHelper.stateChanges.next($event)'
  },
  animations: [trigger(
      'modalBackdrop',
      [transition('void => enter', useAnimation(fadeIn)), transition('enter => exit', useAnimation(fadeOut))])]
})
export class NgbModalBackdrop {
  @Input() backdropClass: string;
  animationsHelper = new AnimationsHelper();
}
