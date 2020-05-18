<!-- demo-container -->
<template>
  <div class="demo-container">
    wrapper
    <demo></demo>
  </div>
</template>
<script>
import demo from '@/components/demo'
export default {
  name: 'demo-container',
  components: {
    demo
  },
  computed: {},
  data () {
    return {
    };
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang='stylus'>
.demo-container
  width 100%
</style>