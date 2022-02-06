<template>
  <div>
    <Navbar />
    <Alert />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Alert from "../components/AlertMessage";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
    Alert
  }
};
</script>
