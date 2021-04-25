<template>
  <div class="landing__page">
    <div class="welcome__img">
      <img src="../assets/images/welcome.svg" alt="welcome-img">
    </div>
    <div class="login__as-wrapper">
      <div class="__item">
        <router-link tag="div" to="/login"   class="__left"><p class="__text">Login as Staff</p></router-link>
        <div class="__right"><div><img src="../assets/images/staff-icon.svg" alt=""></div></div>
      </div>
      <div class="__item">
        <router-link to="/admin-login" tag="div" class="__left"><p class="__text">Login as Admin</p></router-link>
        <div class="__right"><div><img src="../assets/images/admin-icon.svg" alt=""></div></div>
      </div>
    </div>
  </div>
</template>
