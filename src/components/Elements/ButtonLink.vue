<template>
  <p class="has-text-right">
    <router-link :to="routeName" class="button">
      {{ linkText }}
    </router-link>
  </p>
</template>

<script>
export default {
  name: 'ButtonLink',
  props: ['routeName','linkText']
}
</script>
