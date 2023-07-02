<template>
  <div class="w-[50px] h[30px] rounded-[15px] bg-[#ee0a24]" :class="`${value?'bg-red-400':'bg-black'}`" @click="toggle">
    <div class="w-[30px] h-[30px] rounded-[15px] bg-white transition-all" :class="`${value ? 'translate-x-[20px]' : 'translate-x-0'}`">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value:{
        type: Boolean,
        required: true,
    }
  },
  methods:{
    toggle(){
        this.$emit('update:value',!this.value)
    }
  }
};
</script>
