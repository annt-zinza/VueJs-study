<template>
  <sidebar-layout>
    <todo-app-content />
  </sidebar-layout>
</template>

<script>
import SidebarLayout from "../components/layouts/SidebarLayout";
import TodoAppContent from "@/components/TodoAppContent";
export default {
name: "TodoAppView",
  components: {TodoAppContent, SidebarLayout}
}
</script>
