import { defineComponent as _defineComponent } from 'vue'
interface Props {
  prop1: string;
  prop2: string;
  prop3: string;
}


export default /*#__PURE__*/_defineComponent({
  props: {
    prop1: { type: String, required: true, default: 'test' },
    prop2: { type: String, required: true },
    prop3: { type: String, required: true }
  },
  setup(__props: any) {

const props = __props as { prop1: string, prop2: string;, prop3: string; }


return () => {}
}

})