<template>
  <div class="container">
    <div>
      <h1 class="title">
        dynamic-environment-variables-nuxt
      </h1>
      
      <div class="components">
          <div>
            <ComponentOne v-bind:value="this.$store.state.configuration.maVariable"/>
          </div>

          <div>
            <ComponentTwo />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentOne from '~/components/ComponentOne.vue'
import ComponentTwo from '~/components/ComponentTwo.vue'
export default {
  components: {
    ComponentOne, ComponentTwo
  },
  async fetch ({ store, params }) {
    // chargement de la configuration de l'application
    await store.dispatch('configuration/loadConfiguration');
  } 
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

</style>
