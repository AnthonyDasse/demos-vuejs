<template>
  <h2>Je suis le composant 1, et voici une valeur du fichier de configuration {{value}} !</h2>
</template>

<script>
export default {
    props: ['value']
}
</script>