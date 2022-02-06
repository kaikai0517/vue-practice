<template>
  <div>
    <Navbar />
    <Alert />
    <div class="container-fluid">
      <div class="row">
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <Sidebar />
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Alert from "../components/AlertMessage";
export default {
  components: {
    Sidebar,
    Navbar,
    Alert
  }
};
</script>
