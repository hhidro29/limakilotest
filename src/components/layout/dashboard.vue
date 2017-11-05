<template>
  <b-collapse is-nav id="nav_collapse">
      <b-col class="side-navbar" v-bind:class="{ scrollednavbar: isActive }">
          <b-nav class="flex-column header-nav">
            <router-link to="/home" class="nav-component">Dashboard</router-link>
            <router-link to="/home2" class="nav-component">Pesanan</router-link>
            <router-link to="/home3" class="nav-component">Orderan</router-link>
            <router-link to="/a" class="nav-component">item-1</router-link>
            <router-link to="/b" class="nav-component">item-2</router-link>
          </b-nav>
      </b-col>
    </b-collapse>
</template>

<script>
export default {
  data () {
    return {
      isActive: false,
      value: 0
    }
  },
  name: 'dashboard',
  methods: {
    handleScroll: function (event) {
      this.value = window.scrollY
      if (window.scrollY >= 140) {
        this.isActive = true
      } else if (window.scrollY < 140) {
        this.isActive = false
      }
    }
  },
  created: function () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="css" scoped>
  a{
    color: white;
    text-decoration: none;
  }

  .navbar-collapse{
    transition: 0.5s;
  }

  .nav-component{
    padding: 10px 0 10px 15px;
  }

  .side-navbar{
    max-width: 300px;
    background-color: #864257;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    padding-top: 70px;
    z-index: 1;
  }

  .header-nav{
    color: white;
  }

  .sub-navbar{
    border-radius: 5px;
    background-color: white;
  }

  .sub-navbar-component{
    display: block;
    padding: 10px 0 10px 30px;
  }

  .sub-navbar a{
    color: #782F45;
  }

  .router-link-active{
    background-color: #E47583;
  }

  @media screen and (max-width: 990px) {
    .side-navbar{
      max-width: 250px;
      padding-top: 160px;
      transition: 0.3s;
    }

    .scrollednavbar{
      padding-top: 70px;
    }
  }
</style>
