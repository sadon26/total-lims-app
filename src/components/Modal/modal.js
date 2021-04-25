export default {
  name: 'Modal',
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal(e, val) {
      if (e.target.className === 'modal__overlay' || val === 'close') {
        this.$emit('showModal', false);
      }
    },
  },
  created() {
    document.body.style.overflow = 'hidden';
  },
  destroyed() {
    document.body.style.overflow = 'auto';
  },
};
