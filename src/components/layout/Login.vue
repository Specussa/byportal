<!-- <script setup>
import {ref} from "vue";

const links = ref ([
  {name: 'Typography', href: '/typography'},
  {name: 'Button', href: '/button'},
])
</script>

<template>
  <div class="sidebar">
    <router-link class="sidebar__link" v-for="link in links" :key="link.name" :to="link.href">
      {{link.name}}
    </router-link>
  </div>
</template> -->

<template>
  <div class="innerContainer">
    <div class="intro">
      <h2 class="normalTitle">Login</h2>
      <div class="text lightGrey">
        <p>Welcome back</p>
      </div>
      </div>
      <form id="login_account" action="/en/account/login" method="POST">
        <div class="fields">
          <div class="field">
            <label for="email">E-mailaddress</label>
            <input type="email" name="email" id="email" placeholder="E-mailaddress" required="">
          </div>
          <div class="field viewPasswordField hide">
            <label for="password">Password</label>
            <input id="password" type="password" name="password" placeholder="Password" required="">
            <div class="viewPassword">
              <i class="icon-view view"></i>
              <i class="icon-hide hide"></i>
            </div>
          </div>
          <div class="field submit submitWrapper">
            <div class="notificationMessage error" style="display:none;">
            <div class="innerNotification"></div>
            <div class="close">
              <i class="icon-close"></i>
            </div>
          </div>
          <button class="submit button">Log in</button>
        </div>
      </div>
      <div class="link">
        <a href="/en/account/forgot-password">Forgot password?</a>
      </div>
      <div class="divider"></div>
      <div class="link">
        <span class="preText">No account yet?</span>
        <a href="/en/account/create-account">Create account</a>
      </div>
    </form>
  </div>
</template>

<style lang="css" scoped>
  .innerContainer {
    position: absolute;
    top: -100%;
  }
</style>