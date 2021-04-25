<template>
  <div class="admin-sidebar">
    <router-link
      tag="div"
      :to="{ path: '/admin-dashboard' }"
      class="admin-sidebar-icons__wrapper"
    >
      <p class="admin-sidebar-text">Home</p>
      <div class="admin-sidebar-icons">
        <img src="../../assets/images/home-icon.svg" alt="" />
      </div>
    </router-link>

    <router-link
      tag="div"
      :to="{ path: '/admin-dashboard/add-user' }"
      class="admin-sidebar-icons__wrapper"
    >
      <p class="admin-sidebar-text">Add New User</p>
      <div class="admin-sidebar-icons">
        <img src="../../assets/images/add-user.svg" alt="" />
      </div>
    </router-link>

    <div class="admin-sidebar-icons__surround">
      <div
        class="admin-sidebar-icons__wrapper"
        :class="{
          'admin-sidebar-icons__wrapper-active':
            $route.path === '/admin-dashboard/product',
        }"
      >
        <p class="admin-sidebar-text admin-sidebar-text--products">
          Products
          <span class="admin-sidebar-text--products-right-arrow"
            ><img src="../../assets/images/right-arrow.svg" alt="right arrow"
          /></span>
        </p>
        <div class="admin-sidebar-icons">
          <img
            src="../../assets/images/products-icon.svg"
            alt="products icon"
          />
        </div>
      </div>

      <transition name="products-list">
        <div
          class="admin-sidebar-product-category-wrapper"
          :style="{ '--order': products.length }"
        >
          <div
            @click="setProductType"
            v-for="(product, index) in products"
            :key="index"
          >
            <router-link
              tag="div"
              class="admin-sidebar-product-category"
              :to="{
                path: '/admin-dashboard/product',
                query: { name: product },
              }"
              :class="{
                'admin-sidebar-product-category-active':
                  $route.query.name === product,
              }"
            >
              {{ product }}
            </router-link>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'adminSidebar',
  data() {
    return {
      products: ['Blend', 'Additive', 'Base oil'],
      productShowing: null,
    };
  },
  computed: {
    ...mapGetters(['productName', 'productCategory']),
  },
  methods: {
    ...mapMutations(['setProductCategory', 'setProductName']),
    setProductType() {
      this.setProductCategory({ product_type: this.$route.query.name });
    },
  },
  watch: {
    $route(to) {
      if (to.path !== '/admin-dashboard/product') this.setProductCategory({});
    },
    successAddingProduct(val) {
      if (val) {
        this.scrollToTop(product);
      }
    },
  },
  destroyed() {
    this.setProductName(null);
    this.setProductCategory({});
  },
};
</script>
