<script setup>
import LayoutLogin from "@/components/layout/Login.vue"
import LayoutForgot from "@/components/layout/Forgot.vue"
import LayoutRegistration from "@/components/layout/Registration.vue"
import { ref } from "vue";

const isOpenPopup = ref(false);
const isOpenLogin = ref(false);
const isOpenForgot = ref(false);
const isOpenRegistration = ref(false);

const toggleLogin = () => {
  if (isOpenPopup.value === false) {
    isOpenPopup.value = true;
    isOpenLogin.value = true;
    isOpenForgot.value = false;
    isOpenRegistration.value = false;
    document.querySelector('.form__forgot').classList.remove("active");
    document.querySelector('.form__registration').classList.remove("active");
    document.querySelector('.form__login').classList.add("active");
    document.querySelector('.form__login_block').scrollTop = 0;
    document.documentElement.classList.add("noscroll");
  } else {
    isOpenPopup.value = false;
    document.documentElement.classList.remove("noscroll");
  }
};

if (isOpenLogin.value === false && isOpenForgot.value === false && isOpenRegistration.value === false) {
  isOpenPopup.value = false;
  document.documentElement.classList.remove("noscroll");
}

const clickCloseHeaderForm = () => {
  isOpenPopup.value = false;
  document.documentElement.classList.remove("noscroll");
};

const clickOverlay = () => {
  isOpenPopup.value = false;
  document.documentElement.classList.remove("noscroll");
};

if (isOpenPopup.value === false) {
  document.addEventListener('keyup', function (evt) {
    if (evt.keyCode === 27) {
      isOpenPopup.value = false;
      document.documentElement.classList.remove("noscroll");
    }
  });
}
</script>

<template>
  <div :class="['overlay', { active: isOpenPopup }]" @click="clickOverlay"><span></span></div>
  <header class="header">
    <div class="container header__container">
      <div class="header__block">
          <RouterLink class="header__logo" :to="Tr.i18nRoute({ name: 'home' })">
            <svg width="68" height="19" viewBox="0 0 68 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.851562 18V0.867188H5.48047V14.2617H12.0781V18H0.851562ZM30.8516 9.41016C30.8516 10.7305 30.6914 11.9336 30.3711 13.0195C30.0586 14.0977 29.5664 15.0273 28.8945 15.8086C28.2227 16.5898 27.3594 17.1914 26.3047 17.6133C25.25 18.0273 23.9883 18.2344 22.5195 18.2344C21.082 18.2344 19.8359 18.0273 18.7812 17.6133C17.7344 17.1914 16.8711 16.5938 16.1914 15.8203C15.5117 15.0391 15.0078 14.1055 14.6797 13.0195C14.3516 11.9336 14.1875 10.7227 14.1875 9.38672C14.1875 7.60547 14.4805 6.05859 15.0664 4.74609C15.6602 3.42578 16.5742 2.40625 17.8086 1.6875C19.043 0.960938 20.6211 0.597656 22.543 0.597656C24.4961 0.597656 26.082 0.960938 27.3008 1.6875C28.5273 2.41406 29.4258 3.4375 29.9961 4.75781C30.5664 6.07812 30.8516 7.62891 30.8516 9.41016ZM19.0625 9.41016C19.0625 10.4414 19.1797 11.3281 19.4141 12.0703C19.6484 12.8125 20.0195 13.3828 20.5273 13.7812C21.0352 14.1797 21.6992 14.3789 22.5195 14.3789C23.3711 14.3789 24.0469 14.1797 24.5469 13.7812C25.0547 13.3828 25.418 12.8125 25.6367 12.0703C25.8633 11.3281 25.9766 10.4414 25.9766 9.41016C25.9766 7.86328 25.7188 6.64062 25.2031 5.74219C24.6875 4.84375 23.8008 4.39453 22.543 4.39453C21.707 4.39453 21.0312 4.59766 20.5156 5.00391C20.0078 5.41016 19.6367 5.98828 19.4023 6.73828C19.1758 7.48828 19.0625 8.37891 19.0625 9.41016ZM40.8242 7.96875H48.2188V17.2031C47.3359 17.5078 46.3242 17.7578 45.1836 17.9531C44.043 18.1406 42.8477 18.2344 41.5977 18.2344C39.9492 18.2344 38.5039 17.9141 37.2617 17.2734C36.0195 16.6328 35.0508 15.6602 34.3555 14.3555C33.6602 13.043 33.3125 11.3867 33.3125 9.38672C33.3125 7.58984 33.6562 6.03906 34.3438 4.73438C35.0312 3.42188 36.043 2.41016 37.3789 1.69922C38.7227 0.980469 40.3672 0.621094 42.3125 0.621094C43.3828 0.621094 44.3984 0.722656 45.3594 0.925781C46.3203 1.12891 47.1562 1.38672 47.8672 1.69922L46.4023 5.33203C45.7852 5.02734 45.1445 4.80078 44.4805 4.65234C43.8164 4.49609 43.1016 4.41797 42.3359 4.41797C41.3125 4.41797 40.4883 4.64844 39.8633 5.10938C39.2461 5.57031 38.7969 6.1875 38.5156 6.96094C38.2344 7.72656 38.0938 8.57422 38.0938 9.50391C38.0938 10.5664 38.2422 11.4648 38.5391 12.1992C38.8438 12.9258 39.2852 13.4805 39.8633 13.8633C40.4492 14.2383 41.1562 14.4258 41.9844 14.4258C42.2578 14.4258 42.5898 14.4062 42.9805 14.3672C43.3789 14.3281 43.6797 14.2812 43.8828 14.2266V11.543H40.8242V7.96875ZM67.7422 9.41016C67.7422 10.7305 67.582 11.9336 67.2617 13.0195C66.9492 14.0977 66.457 15.0273 65.7852 15.8086C65.1133 16.5898 64.25 17.1914 63.1953 17.6133C62.1406 18.0273 60.8789 18.2344 59.4102 18.2344C57.9727 18.2344 56.7266 18.0273 55.6719 17.6133C54.625 17.1914 53.7617 16.5938 53.082 15.8203C52.4023 15.0391 51.8984 14.1055 51.5703 13.0195C51.2422 11.9336 51.0781 10.7227 51.0781 9.38672C51.0781 7.60547 51.3711 6.05859 51.957 4.74609C52.5508 3.42578 53.4648 2.40625 54.6992 1.6875C55.9336 0.960938 57.5117 0.597656 59.4336 0.597656C61.3867 0.597656 62.9727 0.960938 64.1914 1.6875C65.418 2.41406 66.3164 3.4375 66.8867 4.75781C67.457 6.07812 67.7422 7.62891 67.7422 9.41016ZM55.9531 9.41016C55.9531 10.4414 56.0703 11.3281 56.3047 12.0703C56.5391 12.8125 56.9102 13.3828 57.418 13.7812C57.9258 14.1797 58.5898 14.3789 59.4102 14.3789C60.2617 14.3789 60.9375 14.1797 61.4375 13.7812C61.9453 13.3828 62.3086 12.8125 62.5273 12.0703C62.7539 11.3281 62.8672 10.4414 62.8672 9.41016C62.8672 7.86328 62.6094 6.64062 62.0938 5.74219C61.5781 4.84375 60.6914 4.39453 59.4336 4.39453C58.5977 4.39453 57.9219 4.59766 57.4062 5.00391C56.8984 5.41016 56.5273 5.98828 56.293 6.73828C56.0664 7.48828 55.9531 8.37891 55.9531 9.41016Z" fill="currentColor"/>
            </svg>
          </RouterLink>
          <div class="header__flex">

            <nav>
              <ul>
                <li>
                  <RouterLink :to="Tr.i18nRoute({ name: 'home' })">{{ $t("nav.home") }}</RouterLink>
                </li>
                
                <li>
                  <RouterLink :to="Tr.i18nRoute({ name: 'about' })">{{ $t("nav.about") }}</RouterLink>
                </li>
              </ul>
            </nav>

            <LanguageSwitcher></LanguageSwitcher>
            <ThemeSwitcher></ThemeSwitcher>
            <RouterLink class="header__add" :to="Tr.i18nRoute({ name: 'home' })">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5259 3.54102C10.8711 3.54147 11.1505 3.82166 11.1501 4.16683L11.1348 15.8335C11.1343 16.1787 10.8541 16.4581 10.5089 16.4577C10.1638 16.4572 9.88431 16.177 9.88477 15.8319L9.90006 4.1652C9.90051 3.82002 10.1807 3.54056 10.5259 3.54102Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.04102 10C4.04102 9.65482 4.32084 9.375 4.66602 9.375H16.3327C16.6779 9.375 16.9577 9.65482 16.9577 10C16.9577 10.3452 16.6779 10.625 16.3327 10.625H4.66602C4.32084 10.625 4.04102 10.3452 4.04102 10Z" fill="currentColor"/>
              </svg>
              <span>Создать статью</span>
            </RouterLink>
            <div class="header__buttons">
              <RouterLink class="header__search" :to="Tr.i18nRoute({ name: 'home' })">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.041 18.7493C11.041 14.4922 14.4922 11.041 18.7493 11.041C23.0065 11.041 26.4577 14.4922 26.4577 18.7493C26.4577 23.0065 23.0065 26.4577 18.7493 26.4577C14.4922 26.4577 11.041 23.0065 11.041 18.7493ZM18.7493 12.291C15.1825 12.291 12.291 15.1825 12.291 18.7493C12.291 22.3162 15.1825 25.2077 18.7493 25.2077C22.3162 25.2077 25.2077 22.3162 25.2077 18.7493C25.2077 15.1825 22.3162 12.291 18.7493 12.291Z" fill="currentColor"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M23.3999 23.3999C23.6439 23.1558 24.0397 23.1558 24.2837 23.3999L27.8193 26.9354C28.0634 27.1795 28.0634 27.5752 27.8193 27.8193C27.5752 28.0634 27.1795 28.0634 26.9354 27.8193L23.3999 24.2837C23.1558 24.0397 23.1558 23.6439 23.3999 23.3999Z" fill="currentColor"/>
                </svg>
              </RouterLink>
              <a class="header__login" @click="toggleLogin">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.459 15.4167C16.459 13.4607 18.0446 11.875 20.0007 11.875C21.9567 11.875 23.5423 13.4607 23.5423 15.4167C23.5423 17.3727 21.9567 18.9583 20.0007 18.9583C18.0446 18.9583 16.459 17.3727 16.459 15.4167ZM20.0007 13.125C18.735 13.125 17.709 14.151 17.709 15.4167C17.709 16.6823 18.735 17.7083 20.0007 17.7083C21.2663 17.7083 22.2923 16.6823 22.2923 15.4167C22.2923 14.151 21.2663 13.125 20.0007 13.125Z" fill="currentColor"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8058 21.041H22.1942C23.1043 21.041 23.8255 21.041 24.4069 21.0885C25.0014 21.1371 25.5044 21.2384 25.9637 21.4724C26.7085 21.8519 27.3141 22.4575 27.6936 23.2023C27.9276 23.6616 28.0289 24.1647 28.0775 24.7591C28.125 25.3405 28.125 26.0617 28.125 26.9718V27.4993C28.125 27.8445 27.8452 28.1243 27.5 28.1243H12.5C12.1548 28.1243 11.875 27.8445 11.875 27.4993L11.875 26.9718C11.875 26.0617 11.875 25.3405 11.9225 24.7591C11.9711 24.1646 12.0724 23.6616 12.3064 23.2023C12.6859 22.4575 13.2915 21.8519 14.0363 21.4724C14.4956 21.2384 14.9986 21.1371 15.5931 21.0885C16.1745 21.041 16.8957 21.041 17.8058 21.041ZM14.6038 22.5862C14.0942 22.8459 13.6798 23.2602 13.4202 23.7698C13.2909 24.0235 13.2106 24.3437 13.1683 24.8609C13.1274 25.362 13.1251 25.996 13.125 26.8743H26.875C26.8749 25.996 26.8726 25.362 26.8317 24.8609C26.7894 24.3437 26.7091 24.0235 26.5798 23.7698C26.3202 23.2602 25.9058 22.8459 25.3962 22.5862M14.6038 22.5862C14.8575 22.4569 15.1777 22.3766 15.6949 22.3344C16.2194 22.2915 16.8896 22.291 17.8333 22.291H22.1667C23.1104 22.291 23.7806 22.2915 24.3051 22.3344C24.8223 22.3766 25.1425 22.4569 25.3962 22.5862" fill="currentColor"/>
                </svg>
              </a>
              <RouterLink class="header__burger" :to="Tr.i18nRoute({ name: 'home' })">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6875 14.9785C12.6875 14.6333 12.9673 14.3535 13.3125 14.3535H26.6458C26.991 14.3535 27.2708 14.6333 27.2708 14.9785C27.2708 15.3237 26.991 15.6035 26.6458 15.6035H13.3125C12.9673 15.6035 12.6875 15.3237 12.6875 14.9785Z" fill="currentColor"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6875 19.9785C12.6875 19.6333 12.9673 19.3535 13.3125 19.3535H26.6458C26.991 19.3535 27.2708 19.6333 27.2708 19.9785C27.2708 20.3237 26.991 20.6035 26.6458 20.6035H13.3125C12.9673 20.6035 12.6875 20.3237 12.6875 19.9785Z" fill="currentColor"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6875 24.9785C12.6875 24.6333 12.9673 24.3535 13.3125 24.3535H26.6458C26.991 24.3535 27.2708 24.6333 27.2708 24.9785C27.2708 25.3237 26.991 25.6035 26.6458 25.6035H13.3125C12.9673 25.6035 12.6875 25.3237 12.6875 24.9785Z" fill="currentColor"/>
                </svg>
              </RouterLink>
            </div>
          </div>
      </div>
    </div>
  </header>
  <div :class="['header__form', { active: isOpenPopup }]">
    <button class="header__form_close" @click="clickCloseHeaderForm">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46967 6.46967C6.76256 6.17678 7.23744 6.17678 7.53033 6.46967L17.5303 16.4697C17.8232 16.7626 17.8232 17.2374 17.5303 17.5303C17.2374 17.8232 16.7626 17.8232 16.4697 17.5303L6.46967 7.53033C6.17678 7.23744 6.17678 6.76256 6.46967 6.46967Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5303 6.46967C17.8232 6.76256 17.8232 7.23744 17.5303 7.53033L7.53033 17.5303C7.23744 17.8232 6.76256 17.8232 6.46967 17.5303C6.17678 17.2374 6.17678 16.7626 6.46967 16.4697L16.4697 6.46967C16.7626 6.17678 17.2374 6.17678 17.5303 6.46967Z" fill="currentColor"/>
      </svg>
    </button>
    <LayoutLogin :openLogin="isOpenLogin" />
    <LayoutForgot :openForgot="isOpenForgot" />
    <LayoutRegistration :openRegistration="isOpenRegistration" />
  </div>
</template>

<script>
  import ThemeSwitcher from "@/components/ThemeSwitcher.vue"
  import LanguageSwitcher from "@/components/LanguageSwitcher.vue"
  import Tr from "@/i18n/translation"

  export default {
    components: { LanguageSwitcher, ThemeSwitcher },
    setup() {
      return { Tr }
    }
  }
</script>

<style lang="css" scoped>
/* start header */
.header {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  border-bottom: 1px solid var(--border);
  overflow: hidden;
}
.header::before {
  content: "";
  width: 200%;
  height: 200%;
  position: absolute;
  top: -50%;
  left: -50%;
  z-index: 0;
  opacity: 0.7;
  background-color: var(--bg-gray);
}
.header__container {
  height: 100%;
}
.header__container::after {
  content: "";
  width: 200%;
  height: 200%;
  position: absolute;
  top: -50%;
  left: -50%;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
}
.header__block {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}
.header__logo {
  display: flex;
  width: 70px;
  height: 33px;
  align-items: center;
  justify-content: center;
  object-fit: contain;
}
.header__flex {
  display: flex;
  align-items: center;
  gap: 20px;
}
.header__add {
  display: flex;
  padding: 5px;
  align-items: center;
  gap: 10px;
}
.header__buttons,
.header__buttons a {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header__form {
  width: 100%;
  max-width: 560px;
  max-height: calc(var(--height) - 160px);
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 99;
  opacity: 0;
  border-radius: 25px;
  border: 1px solid var(--border);
  background-color: var(--bg);
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.77, 0, 0.175, 1) 0.15s, opacity 0.2s linear 0.4s;
  transition: transform 0.7s cubic-bezier(0.77, 0, 0.175, 1) 0.15s, opacity 0.2s linear 0.4s;
  -webkit-transform: translate(-50%,calc(-50vh - 80px - 100%));
  transform: translate(-50%,calc(-50vh - 80px - 100%));
  overflow: hidden;
}

.header__form.active {
  opacity: 1;
  -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.77, 0, 0.175, 1) 0.15s, opacity 0.2s linear 0.2s;
  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1) 0.15s, opacity 0.2s linear 0.2s;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
}

.header__form_close {
  display: flex;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
  color: var(--text);
  border-radius: 50%;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: -webkit-transform 0.2s linear, color 0.2s linear;
  transition: transform 0.2s linear, color 0.2s linear;
}

.header__form_close:hover {
  color: var(--hover);
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
/* end header */

/* start mobile */
@media (max-width: 580px) {
  .header__flex {
    gap: 5px;
  }
  .header__add {
    width: 40px;
    height: 40px;
    padding: 0;
    align-items: center;
    justify-content: center;
  }
  .header__add span {
    display: none;
  }
  .header__form {
    max-width: 100%;
    max-height: calc(var(--height) - 200px);
    top: auto;
    left: 0;
    bottom: 0;
    border-radius: 25px 25px 0 0;
    -webkit-transform: translate(0,100%);
    transform: translate(0,100%);
    overflow: hidden;
  }
  .header__form.active {
    -webkit-transform: translate(0,0);
    transform: translate(0,0);
  }
  .header__form_close {
    top: 15px;
    right: 15px;
  }
}
/* end mobile */
</style>