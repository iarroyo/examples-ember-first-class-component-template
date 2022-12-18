import ButtonTemplate from '../template';
import { cell } from 'ember-resources';

const label = 'hello';
let counter = cell(0);
const onCounter = () => counter.current++;
export default <template>
  <ButtonTemplate @label={{label}} @onClick={{onCounter}} />
  <span class="hello">Hello {{counter.current}}!</span>
</template>