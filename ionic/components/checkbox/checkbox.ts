import {Component, Directive, Optional, ElementRef} from 'angular2/core';
import {NgControl} from 'angular2/common';

import {Ion} from '../ion';
import {Form} from '../../util/form';

/**
 * The checkbox is no different than the HTML checkbox input, except it's styled differently.
 *
 * See the [Angular 2 Docs](https://angular.io/docs/js/latest/api/core/Form-interface.html) for more info on forms and input.
 *
 * @property [checked] - whether or not the checkbox is checked (defaults to false)
 * @property [value] - the value of the checkbox component
 * @property [disabled] - whether or not the checkbox is disabled or not.
 *
 * @usage
 * ```html
 * <ion-checkbox checked="true" value="isChecked" ngControl="htmlCtrl">
 *   HTML5
 * </ion-checkbox>
 * ```
 * @demo /docs/v2/demos/checkbox/
 * @see {@link /docs/v2/components#checkbox Checkbox Component Docs}
 */
@Component({
  selector: 'ion-checkbox',
  inputs: [
    'value',
    'checked',
    'disabled',
    'id'
  ],
  host: {
    'role': 'checkbox',
    'tappable': 'true',
    '[attr.id]': 'id',
    '[attr.tab-index]': 'tabIndex',
    '[attr.aria-checked]': 'checked',
    '[attr.aria-disabled]': 'disabled',
    '[attr.aria-labelledby]': 'labelId',
    '(click)': 'click($event)',
    'class': 'item'
  },
  template:
    '<div class="item-inner">' +
      '<div class="checkbox-media" disable-activated>' +
        '<div class="checkbox-icon"></div>' +
      '</div>' +
      '<ion-item-content id="{{labelId}}">' +
        '<ng-content></ng-content>' +
      '</ion-item-content>' +
    '</div>'
})
export class Checkbox {

  constructor(
    private form: Form,
    @Optional() ngControl: NgControl,
    elementRef: ElementRef
  ) {
    this.form = form;
    form.register(this);

    this.onChange = (_) => {};
    this.onTouched = (_) => {};

    this.ngControl = ngControl;

    if (ngControl) ngControl.valueAccessor = this;
  }

  /**
   * @private
   */
  ngOnInit() {
    if (!this.id) {
      this.id = 'chk-' + this.form.nextId();
    }

    this.labelId = 'lbl-' + this.id;
  }

  /**
   * @private
   * Toggle the checked state of the checkbox. Calls onChange to pass the updated checked state to the model (Control).
   */
  toggle() {
    this.checked = !this.checked;
    this.onChange(this.checked);
  }

  /**
   * @private
   * Click event handler to toggle the checkbox checked state.
   * @param {MouseEvent} ev  The click event.
   */
  click(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    this.toggle();
  }

  /**
   * @private
   * Angular2 Forms API method called by the model (Control) on change to update
   * the checked value.
   * https://github.com/angular/angular/blob/master/modules/angular2/src/forms/directives/shared.ts#L34
   */
  writeValue(value) {
    this.checked = value;
  }

  /**
   * @private
   * Angular2 Forms API method called by the view (NgControl) to register the
   * onChange event handler that updates the model (Control).
   * https://github.com/angular/angular/blob/master/modules/angular2/src/forms/directives/shared.ts#L27
   * @param {Function} fn  the onChange event handler.
   */
  registerOnChange(fn) { this.onChange = fn; }

  /**
   * @private
   * Angular2 Forms API method called by the the view (NgControl) to register
   * the onTouched event handler that marks model (Control) as touched.
   * @param {Function} fn  onTouched event handler.
   */
  registerOnTouched(fn) { this.onTouched = fn; }

  /**
   * @private
   */
  ngOnDestroy() {
    this.form.deregister(this);
  }
}
