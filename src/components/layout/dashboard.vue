<template>
  <b-collapse is-nav id="nav_collapse">
      <b-col class="side-navbar">
          <b-nav class="flex-column header-nav">
            <router-link to="/home" class="nav-component">Dashboard</router-link>
            <b-nav-item v-b-toggle.menu1>Orderan</b-nav-item>
            <b-collapse id="menu1" class="sub-navbar">
              <router-link to="/a"><b-nav-item >item-1</b-nav-item></router-link>
              <router-link to="/a"><b-nav-item >item-2</b-nav-item></router-link>
            </b-collapse>
            <router-link to="/home2" class="nav-component">Pesanan</router-link>
          </b-nav>
      </b-col>
    </b-collapse>
</template>

<script>
export default {
  name: 'dashboard'
}
</script>

<style lang="css" scoped>
  a{
    color: white;
    text-decoration: none;
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

  .sub-navbar a{
    color: #782F45;
  }

  .router-link-active{
    background-color: #E47583;
  }

  @media screen and (max-width: 990px) {
    .side-navbar{
      padding-top: 160px;
    }
  }
</style>
