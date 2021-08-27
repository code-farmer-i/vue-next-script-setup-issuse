<script setup lang="ts">
interface Props {
  type?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'a',
});

console.log(
  {
    a: 1,
  }[props.type]
);
</script>