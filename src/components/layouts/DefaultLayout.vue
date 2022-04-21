<template>
  <div class="default-layout">
    <nav class="default-layout__nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/d2-game">D2-Game</router-link> |
      <router-link to="/todo-app">Todo-App</router-link>
    </nav>
    <main class="default-layout__main">
      <slot/>
    </main>
  </div>
</template>

<script>
export default {
name: "DefaultLayout"
}
</script>
