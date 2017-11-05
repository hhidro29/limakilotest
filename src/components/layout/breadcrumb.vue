<template>
  <b-breadcrumb :items="items"/>
</template>

<script>
import Vue from 'vue'
import VueBreadcrumbs from 'vue-breadcrumbs'

Vue.use(VueBreadcrumbs, {
  template: '<nav class="breadcrumb" v-if="$breadcrumbs.length"> ' +
    '<router-link class="breadcrumb-item" v-for="(crumb, key) in $breadcrumbs" :to="linkProp(crumb)" :key="key">{{ crumb | crumbText }}</router-link> ' +
    '</nav>'
})

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
