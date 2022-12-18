import ButtonTemplate from '../template';

const label = 'alert';
const onAlert = () => alert('alert!!!');
export default <template>
  <ButtonTemplate @label={{label}} @onClick={{onAlert}} />
</template>