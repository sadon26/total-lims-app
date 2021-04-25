import { mapGetters } from 'vuex';
import Dropdown from '../../../../../components/Dropdown';

export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      formData: {
        selectedProduct: '',
        productId: '',
        dateSampled: '',
        dateReceived: '',
        reportNo: '',
        source: '',
        appearance: '',
        sto_number: '',
        water_content: '',
        specific_gravity: '',
        tan: '',
        flash_point: '',
        visco_40: '',
        visco_100: '',
        remark: '',
        analysis: [],
      },
    };
  },
  computed: {
    ...mapGetters(['productsInCategory', 'testsIds']),
  },
  methods: {
    analysisUpdate(e) {
      let name = e.target.name;
      let testId = this.testsIds.find((data) => data.test === name).id;
      let index = this.formData.analysis.findIndex(
        (anlys) => anlys.testId === testId
      );
      if (index === -1) {
        this.formData.analysis.push({
          testId,
          productSpecResult: e.target.value,
        });
        console.log(this.formData.analysis);
      } else {
        this.formData.analysis[index] = {
          testId,
          productSpecResult: e.target.value,
        };
      }

      this.formData.analysis = this.formData.analysis.filter(
        (anlys) => anlys.productSpecResult !== ''
      );
    },
  },
  watch: {
    productsInCategory(value) {
      console.log(value);
    },
    'formData.selectedProduct'(value) {
      console.log(value);
      this.formData.productId = this.productsInCategory.find(
        (product) => product.product_name === value
      ).id;
    },
  },
};
