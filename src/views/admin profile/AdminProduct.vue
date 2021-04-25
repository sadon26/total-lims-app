<template>
  <div class="admin__product-wrap">
    <div class="loading__icon-wrap" v-if="loadingProductCategory">
      <div class="loading__icon">
        <img src="../../assets/images/Spin.svg" alt="animated-spin-icon" />
      </div>
    </div>
    <div v-else class="admin__product">
      <!-- Popups -->
      <transition name="no-product-name">
        <p class="admin__product-message" v-show="noProductName">
          You must add a product name
        </p>
      </transition>
      <transition name="no-product-name">
        <p class="admin__product-message" v-show="successAddingProduct">
          Successfully added {{ productCategory.product_type }} product
        </p>
      </transition>
      <transition name="no-product-name">
        <p class="admin__product-message" v-show="updatingProductMessage">
          {{ this.message }}
        </p>
      </transition>

      <!-- Heading -->
      <div class="admin__product-heading stagger__in--1">
        <div class="admin__product-heading-border"></div>
        <p class="admin__product-heading-text">
          {{ productCategory.product_type }} Product Category
        </p>
      </div>

      <div class="admin__product-section-description">
        <p class="admin__product-section-description-left stagger__in--2">
          Add Product Specifications
        </p>
        <div class="admin__product-section-description-right stagger__in--3">
          <span>{{ productCategory.product_type }} Products</span>
          <div class="number">{{ productsInCategory.length }}</div>
        </div>
      </div>

      <!-- Section -->
      <div class="admin__product-section">
        <!-- Left section -->
        <div class="admin__product-section-left stagger__in--2">
          <div
            id="input-area-wrapper"
            class="admin__product-section-left-input-area"
          >
            <div
              v-for="(spec, index) in productSpecifications"
              :key="index"
              class="admin__product-section-left-input-area-row"
            >
              <ProductInput
                @input="input($event, index, 0)"
                :labelName="spec.labelName[0]"
                :placeholder="spec.placeholder[0]"
              />
              <ProductInput
                @input="input($event, index, 1)"
                v-if="spec.labelName[1]"
                :labelName="spec.labelName[1]"
                :placeholder="spec.placeholder[1]"
              />
            </div>
          </div>

          <button
            v-if="!loadingProduct"
            @click="addProduct"
            class="btn__centre"
          >
            Create Product
          </button>
          <div v-else class="loading-add-product">
            <img src="../../assets/images/Ripple.svg" alt="" />
          </div>
        </div>

        <!-- Right section -->
        <div class="admin__product-section-right stagger__in--3">
          <template v-if="productsInCategory.length === 0">
            <p>No Products added yet</p>
          </template>
          <template v-else>
            <div
              class="item"
              v-for="(product, index) in productsInCategory"
              :key="index"
            >
              <span
                ><span style="margin-right: 10px;">{{ index + 1 }}.</span
                >{{ product.product_name }}
              </span>
              <div class="product__edit-delete" @click="editData(product)">
                <div class="edit">
                  <img
                    src="../../assets/images/edit-icon.svg"
                    alt="edit icon"
                  />
                </div>
                <div
                  class="delete"
                  @click="(e) => deleteProduct(e, product.id)"
                >
                  <img
                    src="../../assets/images/delete-icon.svg"
                    alt="delete icon"
                  />
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <portal to="root">
      <Modal @showModal="showModal = false" v-if="showModal">
        <p class="main__layout-title large">
          Edit {{ productSelectedData.product_name }}
        </p>
        <div class="main__layout-grid mb-1">
          <div>
            <label for="">Specific Gravity</label>
            <input
              v-model="productSelectedData.specification[0].product_spec"
              type="text"
              placeholder="Specific Gravity"
            />
          </div>
          <div>
            <label for="">Visco @40°C</label>
            <input
              v-model="productSelectedData.specification[1].product_spec"
              type="text"
              placeholder="Visco @40°C"
            />
          </div>
          <div>
            <label for="">Visco @100°C</label>
            <input
              v-model="productSelectedData.specification[2].product_spec"
              type="text"
              placeholder="Visco @100°C"
            />
          </div>
          <div>
            <label for="">Vi</label>
            <input
              v-model="productSelectedData.specification[3].product_spec"
              type="text"
              placeholder="Vi"
            />
          </div>
          <div>
            <label for="">Ccs</label>
            <input
              v-model="productSelectedData.specification[4].product_spec"
              type="text"
              placeholder="Ccs"
            />
          </div>
          <div>
            <label for="">Mrv</label>
            <input
              v-model="productSelectedData.specification[5].product_spec"
              type="text"
              placeholder="Mrv"
            />
          </div>
          <div>
            <label for="">Colour</label>
            <input
              v-model="productSelectedData.specification[6].product_spec"
              type="text"
              placeholder="Colour"
            />
          </div>
          <div>
            <label for="">Aspect</label>
            <input
              v-model="productSelectedData.specification[7].product_spec"
              type="text"
              placeholder="Aspect"
            />
          </div>
          <div>
            <label for="">Foaming24</label>
            <input
              v-model="productSelectedData.specification[8].product_spec"
              type="text"
              placeholder="Foaming24"
            />
          </div>
          <div>
            <label for="">Foaming93</label>
            <input
              v-model="productSelectedData.specification[9].product_spec"
              type="text"
              placeholder="Foaming93"
            />
          </div>
          <div>
            <label for="">Foaming24 after 93</label>
            <input
              v-model="productSelectedData.specification[10].product_spec"
              type="text"
              placeholder="Foaming24 after 93"
            />
          </div>
          <div>
            <label for="">Base Number</label>
            <input
              v-model="productSelectedData.specification[11].product_spec"
              type="text"
              placeholder="Base Number"
            />
          </div>
          <div>
            <label for="">Flash Point</label>
            <input
              v-model="productSelectedData.specification[12].product_spec"
              type="text"
              placeholder="Flash Point"
            />
          </div>
          <div>
            <label for="">Pour Point</label>
            <input
              v-model="productSelectedData.specification[13].product_spec"
              type="text"
              placeholder="Pour Point"
            />
          </div>
          <div>
            <label for="">Noack Volatility</label>
            <input
              v-model="productSelectedData.specification[14].product_spec"
              type="text"
              placeholder="Noack Volatility"
            />
          </div>
          <div>
            <label for="">Sulphated ash</label>
            <input
              v-model="productSelectedData.specification[15].product_spec"
              type="text"
              placeholder="Sulphated ash"
            />
          </div>
          <div>
            <label for="">Ca</label>
            <input
              v-model="productSelectedData.specification[16].product_spec"
              type="text"
              placeholder="Ca"
            />
          </div>
          <div>
            <label for="">Zn</label>
            <input
              v-model="productSelectedData.specification[17].product_spec"
              type="text"
              placeholder="Zn"
            />
          </div>
          <div>
            <label for="">P</label>
            <input
              v-model="productSelectedData.specification[18].product_spec"
              type="text"
              placeholder="P"
            />
          </div>
          <div>
            <label for="">Mg</label>
            <input
              v-model="productSelectedData.specification[19].product_spec"
              type="text"
              placeholder="Mg"
            />
          </div>
        </div>
        <button v-if="!updatingProduct" class="btn__centre" @click="update">
          Update Product
        </button>
        <div v-else class="loading-add-product">
          <img src="../../assets/images/Ripple.svg" alt="" />
        </div>
        <p style="text-align: center; color: red;" v-if="!message">
          {{ message }}
        </p>
      </Modal>
    </portal>
  </div>
</template>

<script>
import Modal from '../../components/Modal';
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
import ProductInput from '../../components/ProductInput.vue';

export default {
  data() {
    return {
      noProductName: false,
      showModal: false,
      updatingProduct: false,
      updatingProductMessage: false,
      message: '',
      productSpecifications: [
        {
          labelName: ['Product name', 'Specific gravity'],
          model: ['', ''],
          placeholder: ['Product name', 'Specific gravity'],
        },
        {
          labelName: ['Visco @40°C', 'Visco @100°C'],
          model: ['', ''],
          placeholder: ['Visco @40°C', 'Visco @100°C'],
        },
        {
          labelName: ['Vi', 'Ccs'],
          model: ['', ''],
          placeholder: ['Vi', 'Ccs'],
        },
        {
          labelName: ['Mrv', 'Colour'],
          model: ['', ''],
          placeholder: ['Mrv', 'Colour'],
        },
        {
          labelName: ['Aspect', 'Foaming24'],
          model: ['', ''],
          placeholder: ['Aspect', 'Foaming24'],
        },
        {
          labelName: ['Foaming93', 'Foaming24 after 93'],
          model: ['', ''],
          placeholder: ['Foaming93', 'Foaming24 after 93'],
        },
        {
          labelName: ['Base number', 'Flash Point'],
          model: ['', ''],
          placeholder: ['Base number', 'Flash Point'],
        },
        {
          labelName: ['Pour point', 'Noack volatility'],
          model: ['', ''],
          placeholder: ['Pour point', 'Noack volatility'],
        },
        {
          labelName: ['Sulphated ash', 'Ca'],
          model: ['', ''],
          placeholder: ['Sulphated ash', 'Ca'],
        },
        {
          labelName: ['Zn', 'P'],
          model: ['', ''],
          placeholder: ['Zn', 'P'],
        },
        {
          labelName: ['Mg'],
          model: [''],
          placeholder: ['Mg'],
        },
      ],
      successDeletingProduct: false,
      productSelectedData: {},
    };
  },
  name: 'AdminProduct',
  components: {
    ProductInput,
    Modal,
  },
  computed: {
    ...mapGetters([
      'productName',
      'successAddingProduct',
      'loadingProduct',
      'loadingProductCategory',
      'productCategory',
      'testsIds',
      'productsInCategory',
    ]),
  },
  methods: {
    ...mapActions([
      'createProduct',
      'getProductsInCategory',
      'setProductName',
      'deleteProductInCategory',
      'updateProduct',
    ]),
    addProduct() {
      if (!this.productSpecifications[0].model[0]) {
        this.noProductName = true;
        setTimeout(() => (this.noProductName = false), 3000);
      } else {
        let product = [];
        for (let spec of this.productSpecifications) {
          spec.labelName.map((name, index) => {
            let formattedName = name
              .split(' ')
              .join('_')
              .replace(/[° || @]/g, '')
              .toLowerCase();
            if (formattedName === 'visco_40c') formattedName = 'visco_40';
            if (formattedName === 'visco_100c') formattedName = 'visco_100';
            if (formattedName === 'mg') {
              product.push({ Mg: spec.model[index] });
            } else {
              product.push({ [formattedName]: spec.model[index] });
            }
          });
        }
        let filteredProduct = [];
        product.map((item) => {
          let [[key, value]] = Object.entries(item);
          value ? filteredProduct.push({ [key]: value }) : null;
        });
        //Insert Ids
        let spliced = filteredProduct.splice(1);
        let specification = [];

        spliced.forEach((product) => {
          const [[key, value]] = Object.entries(product);
          const res = this.testsIds.find(
            (obj) => obj.test.replace(/\s/g, '') === key
          );
          specification.push({ productSpec: value, testId: res.id });
        });

        let payload = {
          productName: this.productSpecifications[0].model[0],
          categoryId: this.productCategory.id,
          specification,
        };
        this.createProduct(payload);
      }
    },
    input(value, index, rowIndex) {
      this.productSpecifications[index].model[rowIndex] = value;
    },
    clearAllInputFields() {
      //Clear model from parent
      this.productSpecifications.forEach((spec, index) => {
        spec.model.forEach((el, i) => {
          this.productSpecifications[index].model[i] = '';
        });
      });

      //Clear input values from children
      const inputs = document.getElementsByTagName('input');
      inputs.forEach((input) => (input.value = ''));
    },
    scrollToTop() {
      let productInputsWrapper = document.getElementById('input-area-wrapper');
      let scrolledVal = productInputsWrapper?.scrollTop;
      let interval = setInterval(() => {
        (scrolledVal -= 5), scrolledVal <= 0 && clearInterval(interval);
      }, 1);
    },
    deleteProduct(e, id) {
      e.stopPropagation();
      if (confirm('Are you sure you want to delete this product?')) {
        this.deleteProductInCategory(id)
          .then((res) => {
            this.successDeletingProduct = true;
            setTimeout(() => (this.successDeletingProduct = false), 3000);
            const { id } = this.productCategory;
            this.getProductsInCategory(id)
              .then(({ data }) => {
                const { data: products } = data;
                this.$store.commit('productsInCategory', products);
              })
              .catch((err) => err.response.data.message);
          })
          .catch((err) => err);
      }
    },
    editData(product) {
      this.showModal = true;
      this.productSelectedData = product;

      //Insert ids for the specifications
      this.productSelectedData.specification.forEach((spec, index) => {
        let testId = this.testsIds.find((test) => test.test === spec.test).id;
        this.productSelectedData.specification[index].testId = testId;
      });

      // Fill up empty specifications
      this.testsIds.forEach((test, index) => {
        let hasId = this.productSelectedData.specification.some(
          (spec) => spec.testId === test.id
        );
        if (!hasId) {
          this.productSelectedData.specification.push({
            testId: test.id,
            product_spec: '',
          });
        }
      });

      this.productSelectedData.specification.sort(
        (a, b) => Number(a.testId) - Number(b.testId)
      );
    },
    update() {
      this.updatingProduct = true;
      this.message = '';

      //Filter out unfilled inputs
      let specification = this.productSelectedData.specification.filter(
        (spec) => spec.product_spec !== ''
      );
      const { id } = this.productSelectedData;

      //Update the product
      this.updateProduct({ id, specification })
        .then((res) => {
          this.updatingProduct = false;
          this.showModal = false;
          this.updatingProductMessage = true;
          setTimeout(() => (this.updatingProductMessage = false), 3000);
          this.message = 'Product updated successfully';

          // Fetch the new products for the category
          this.getProductsInCategory(this.productCategory.id).then((res) => {
            this.$store.commit('productsInCategory', res.data.data);
          });
        })
        .catch((error) => {
          this.updatingProduct = false;
          this.message = error.response.data.message;
        });
    },
  },
  watch: {
    productCategory() {
      this.clearAllInputFields();
    },
    successAddingProduct(val) {
      if (val) {
        this.clearAllInputFields();
        this.scrollToTop();
        setTimeout(() => {
          this.$store.commit('successAddingProduct', false);
        }, 3000);
      }
    },
  },
  created() {
    this.$store.commit('loadingProduct', false);
    const { name: product } = this.$route.query;
    this.setProductName(product);
  },
};
</script>
