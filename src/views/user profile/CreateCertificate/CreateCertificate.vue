<template>
  <div class="base__oil-cert">
    <div class="__heading">
      <p>Add Product Certificate</p>
    </div>
    <template>
      <Blend v-if="$route.query.product === 'Blend'" />
    </template>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Blend from './Products/Blend';

export default {
  name: 'CreateCertificate',
  components: {
    Blend,
  },
  methods: {
    ...mapActions(['setProductName']),
  },
  created() {
    const { product } = this.$route.query;
    this.setProductName(product);
  },
};
</script>
