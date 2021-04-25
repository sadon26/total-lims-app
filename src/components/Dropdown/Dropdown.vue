<template>
  <div>
    <div
      @click="showDropdown = !showDropdown"
      class="dropdown flex flex__space-center"
      :class="[size === 'small' && 'dropdown--small']"
    >
      <span class="main__layout-text">{{ value || placeholder }}</span>
      <div>
        <img
          class="icon"
          src="../../assets/images/arrow-down.svg"
          alt="arrow-down-icon"
        />
      </div>
      <div
        ref="dropdown"
        tabindex="-1"
        class="dropdown__options"
        v-if="showDropdown"
      >
        <template v-if="options.length">
          <span
            @click="selectedOption(option)"
            v-for="(option, index) in options"
            :key="index"
            class="main__layout-text hover"
          >
            {{ option }}
          </span>
        </template>
        <template v-else>
          <span class="main__layout-text">Nothing to show</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script src="./dropdown.js"></script>

<style lang="scss" scoped>
@import './dropdown.scss';
</style>
