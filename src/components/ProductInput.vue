<template>
  <div class="admin__product-section-left-input-area-row-label">
    <label for="first_name">{{ labelName }}</label>
    <input type="text" @input="updateText" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: ['labelName', 'placeholder', 'value'],
  methods: {
    updateText(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>
