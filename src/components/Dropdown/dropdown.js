export default {
  name: 'Dropdown',
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Select an item',
    },
    size: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => ['one', 'two'],
    },
  },
  data() {
    return {
      showDropdown: false,
    };
  },
  methods: {
    selectedOption(value) {
      this.$emit('input', value);
      this.showDropdown = false;
    },
  },
  watch: {
    showDropdown(value) {
      value &&
        setTimeout(() => {
          const { dropdown } = this.$refs;
          if (dropdown) {
            dropdown.focus();
            dropdown.addEventListener(
              'blur',
              () => (this.showDropdown = !this.showDropdown)
            );
          }
        }, 200);
    },
  },
};
