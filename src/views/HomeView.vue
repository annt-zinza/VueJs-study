<template>
  <default-layout>
    <hello-world />
  </default-layout>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import DefaultLayout from "../components/layouts/DefaultLayout";

  export default {
    name: 'Home',

    components: {
      DefaultLayout,
      HelloWorld,
    },
  }
</script>
