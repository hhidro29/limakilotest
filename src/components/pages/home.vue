<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from '../layout/header'
import Footer from '../layout/footer'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>
