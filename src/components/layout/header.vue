<template>
  <div class="">
    <b-row style="margin-right:0;">
    <b-col cols="6" class="container-header">
      <b-navbar toggleable="lg" type="dark" class="header-content">
        <div class="">
          <img src="../../assets/limakilo_logo.png" alt="logo" height="35">
          <b-navbar-brand href="#">Admin</b-navbar-brand>
        </div>
        <b-nav-toggle visible target="nav_collapse"></b-nav-toggle>
      </b-navbar>
    </b-col>
    <b-col cols="6" class="container-header">
      <b-navbar toggleable="lg" type="dark" class="header-content">
      <b-nav is-nav-bar class="right-header">
        <b-nav-item-dropdown right>
          <template slot="button-content">
            <b-img rounded="circle" blank height="15" blank-color="#777" alt="img" class="m-1" />
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      <b-nav-item-dropdown right>
        <template slot="button-content">
          <b-img rounded="circle" blank height="15" blank-color="#777" alt="img" class="m-1" />
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
    </b-navbar>
      <b-navbar toggleable="lg">
        <b-collapse is-nav id="nav_collapse">
          <Dash/>
        </b-collapse>
      </b-navbar>
    </b-col>
  </b-row>
  </div>
</template>

<script>
import Dash from './dashboard'
export default {
  name: 'header',
  components: {
    Dash
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container-header{
    padding: 0;
  }
  .header-content{
    background-color: #782F45;
    z-index: 3;
    padding: 5px 0;
  }

  .padding0{
    padding: 0;
  }

  .right-header{
    margin-left: auto;
  }

  @media screen and (max-width: 990px) {
    .container-header{
      flex: 0 0 100%;
      max-width: 100%;
    }
    .right-header{
        margin-right: auto;
    }
  }
</style>
