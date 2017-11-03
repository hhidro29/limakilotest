<template lang="html">
  <div class="container-main">
    <b-col align-h="end" class="padding-zero">
      <NavPage/>
    </b-col>
    <b-col align-h="end">
      <b-card-group v-for="n in coba"deck class="mb-3">
        <child v-for="data in posting" :aa="data.title" :message="message"></child>
      </b-card-group>
    </b-col>
  </div>
</template>

<script>
import Vue from 'vue'
import NavPage from './breadcrumb'

Vue.component('child', {
  props: ['aa', 'message'],
  template: `
    <b-card
            header-class="header-card"
            text-variant="black"
            :header="aa"
            class="text-center">
        <p class="card-text">{{message}}</p>
         <b-button href="#" class="header-card">Open</b-button>
    </b-card>`
})

export default {
  data () {
    return {
      message: 'hello mr. magoo',
      coba: 5,
      posting: [
        {
          title: 'Pesanan'
        },
        {
          title: 'Product'
        },
        {
          title: 'Sales'
        }
      ]
    }
  },
  components: {
    NavPage
  }
}
</script>

<style lang="css">
  .container-main{
    margin-left: 300px;
  }

  .container-main-2{
    margin-left: 300px;
  }

  .header-card{
    background-color: #864257;
    color: white;
  }

  .padding-zero{
    padding: 0;
  }

  @media screen and (max-width: 990px) {
    .container-main{
      margin-left: auto;
      margin-right: auto;
    }

    .container-main-2{
      max-width: 100%;
    }

    .padding-zero{
      padding: 0;
      margin: 0;
    }
  }
</style>
