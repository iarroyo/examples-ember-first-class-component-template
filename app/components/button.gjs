import Component from '@glimmer/component';
import { on } from '@ember/modifier';
import { action } from '@ember/object';

export default class Button extends Component {
  label='myButton';

  @action
  alert() {
    window.alert(this.label);
  }

  <template>
    <button type='button' {{on 'click' this.alert}}>{{this.label}}</button>
  </template>
}


