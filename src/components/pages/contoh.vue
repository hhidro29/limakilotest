<template>
  <div>
    <Header/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../layout/header'
import Home from '../layout/homeContent'
import Footer from '../layout/footer'

export default {
  name: 'app',
  components: {
    Header,
    Home,
    Footer
  }
}
</script>
