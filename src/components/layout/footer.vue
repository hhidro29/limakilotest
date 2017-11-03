<template lang="html">
  <div class="container-footer">
    <b-row class="margin-0">
      <b-col class="container-footer-header">
        <h1>Limakilo Admin</h1>
      </b-col>
    </b-row>
    <b-row class="margin-0">
      <b-col class="mobile">
        <h4>Pesanan</h4>
        <h6><a href="#">test</a></h6>
        <h6><a href="#">test</a></h6>
        <h6><a href="#">test</a></h6>
      </b-col>
      <b-col class="mobile">
        <h4>Orderan</h4>
        <h6><a href="#">test</a></h6>
        <h6><a href="#">test</a></h6>
        <h6><a href="#">test</a></h6>
      </b-col>
      <b-col class="mobile">
        <h4>Sales</h4>
        <h6><a href="#">test</a></h6>
        <h6><a href="#">test</a></h6>
        <h6><a href="#">test</a></h6>
      </b-col>
    </b-row>
    <b-row class="margin-0">
      <b-col class="container-footer-footer">
        2017 Limakilo Admin all right reserve
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  a{
    text-decoration: none;
    color: white;
  }

  .container-footer-header{
    margin: 10px 0;
  }

  .container-footer-footer{
    margin: 20px 10px;
    font-size: 12px;
  }

  .container-footer{
    color: white;
    padding-left: 300px;
    margin: 0;
    text-align: center;
    background-color: #782F45;
    width: 100%;
  }

  .margin-0{
    margin: 0;
  }

  @media screen and (max-width: 990px) {
    .container-footer{
      padding-left: 0;
    }

    .mobile{
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

</style>
