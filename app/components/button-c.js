/* eslint-disable no-unused-vars */
import { hbs } from 'ember-template-imports';
import { on } from '@ember/modifier';

const label = 'myButtonC';
const alert = () => window.alert(label);
const ButtonC = hbs`
    {{!-- template-lint-disable no-curly-component-invocation --}}
    {{!-- template-lint-disable no-implicit-this --}}
    <button type='button' {{on 'click' alert}}>{{label}}</button>
`;
export default hbs`<ButtonC/>`;
