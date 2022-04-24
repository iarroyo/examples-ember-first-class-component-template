/* eslint-disable no-unused-vars */
import Component from '@glimmer/component';
import { hbs } from 'ember-template-imports';
import { on } from '@ember/modifier';
import { action } from '@ember/object';

export default class ButtonA extends Component {
  label = 'myButtonA';

  @action
  alert() {
    window.alert(this.label);
  }

  static template = hbs`
    <button type='button' {{on 'click' this.alert}}>{{this.label}}</button>
  `;
}
