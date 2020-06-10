<template>
<div class="row">
    <div class="col-md-12">
        <Header/>
    </div>
    <div class="col-md-12">
      <router-view></router-view>
    </div>
    <div class="col-md-12">
        <Footer/>
    </div>
</div>

</template>

<script>
import Header from './Header';
import Footer from './Footer';
export default {
  name: 'Dashboard',
  components:{
    Header,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
