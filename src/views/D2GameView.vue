<template>
  <default-layout>
    <div class="d2-game">
      <d2-game-content msg="Break Down All Ball"/>
    </div>
  </default-layout>
</template>

<script>
import D2GameContent from "@/components/D2GameContent";
import DefaultLayout from "../components/layouts/DefaultLayout";

export default {
  name: "D2GameView",
  components: {
    DefaultLayout,
    D2GameContent
  }
}
</script>
