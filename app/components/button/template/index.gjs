import { on } from '@ember/modifier';
export default <template>
  <button type='button' {{on 'click' @onClick}}>{{@label}}</button>
</template>