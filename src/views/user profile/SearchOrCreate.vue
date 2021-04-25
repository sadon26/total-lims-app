<template>
  <div class="search__wrapper">
    <p class="__heading">Search For A Product Certificate</p>
    <div class="search__area">
      <input
        type="text"
        placeholder="Search for a new product certificate..."
      />
      <div class="search__icon">
        <img src="../../assets/images/search-icon.svg" alt="search-icon" />
      </div>
    </div>
    <p class="__or">OR</p>
    <div class="create__new">
      <div class="__text">
        <p>Create A New Product Certificate</p>
      </div>
      <router-link
        :to="{ name: 'BlendCert', query: { product: 'Blend' } }"
        tag="div"
        class="section__body"
      >
        <div>
          <img src="../../assets/images/blend 2.png" alt="" />
        </div>
        <p class="section__one__name">BLEND</p>
      </router-link>
      <router-link
        tag="div"
        :to="{ path: '/user-profile/create-base-cert' }"
        class="section__body"
      >
        <div>
          <img src="../../assets/images/base-oil.png" alt="" />
        </div>
        <p class="section__one__name">BASE OIL</p>
      </router-link>
      <router-link tag="div" to="#" class="section__body">
        <div>
          <img src="../../assets/images/additive 1.png" alt="" />
        </div>
        <p class="section__one__name">ADDITIVE</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchOrCreate',
};
</script>
