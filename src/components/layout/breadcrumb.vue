<template>
  <b-breadcrumb :items="items"/>
</template>

<script>
export default {
  name: 'navPage',
  data () {
    return {
      items: [{
        text: 'Dashboard',
        href: '#'
      }, {
        text: 'Dashboard',
        active: true
      }]
    }
  }
}
</script>
