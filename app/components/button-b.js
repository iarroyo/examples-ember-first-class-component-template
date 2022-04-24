/* eslint-disable no-unused-vars */
import { hbs } from 'ember-template-imports';
import { on } from '@ember/modifier';

const label = 'myButtonB';
const alert = () => window.alert(label);
export default hbs`
    {{!-- template-lint-disable no-curly-component-invocation --}}
    {{!-- template-lint-disable no-implicit-this --}}
    <button type='button' {{on 'click' alert}}>{{label}}</button>
`;
