<template>
 <div class="layout">
<app-header></app-header>
<router-view></router-view>
<app-footer></app-footer>
</div>
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  components:{
    'app-header':Header,
    'app-footer':Footer
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

}
</script>

<style>

</style>
