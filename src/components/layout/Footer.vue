<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__block">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style lang="css" scoped>
 .footer {
  display: flex;
  width: 100%;
  height: 100px;
 }
</style>