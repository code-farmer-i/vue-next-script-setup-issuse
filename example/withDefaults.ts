import { defineComponent as _defineComponent } from 'vue'
interface Props {
  type?: string;
}


export default _defineComponent({
  props: {
    type: { type: String, required: false, default: 'a' }
  } as unknown as undefined,
  setup(__props: {
  type?: string;
}) {

const props = __props


console.log(
  {
    a: 1,
  }[props.type]
);

return () => {}
}

})