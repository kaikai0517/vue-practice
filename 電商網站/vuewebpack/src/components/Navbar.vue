<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary sticky-top">
      <a href="#" class="ml-5"
        ><img
          src="https://upload.cc/i1/2022/01/17/bGNkQY.jpeg"
          alt=""
          style="width:50px; height:50px"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto ">
          <li class="nav-item active ">
            <router-link class="nav-link text-white hvr-float-shadow" to="/"
              >關於紅氣球 <span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item active ">
            <a
              href="#"
              class=" nav-link text-white ml-5 hvr-float-shadow"
              @click="toProducts('all')"
              >商品介紹</a
            >
          </li>

          <li class="nav-item">
            <router-link
              class="nav-link text-white ml-5 hvr-float-shadow"
              to="/information"
              >門市資訊</router-link
            >
          </li>
          <li class="nav-item d-flex  ml-3">
            <router-link class="nav-link text-white" to="/login"
              ><i class="fas fa-user-cog fa-2x"></i
            ></router-link>
            <a
              class="nav-link text-white"
              data-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              style="position:relative;"
              ><i class="fas fa-shopping-cart fa-2x "></i
              ><span class="badge badge-danger cartNum" v-if="cartNum > 0">{{
                cartNum
              }}</span></a
            >
          </li>
        </ul>
      </div>
    </nav>
    <div class="collapse" id="collapseExample">
      <div class="card card-body bg-dark ">
        <table class="table text-light">
          <thead>
            <th width="100"></th>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
            <th>小記</th>
            <th width="100"></th>
          </thead>
          <tbody>
            <tr v-for="item in cartData" :key="item.id">
              <td class="align-middle">
                <img
                  :src="item.imageUrl"
                  class="img-fluid"
                  alt=""
                  style="width:70px;height:70px"
                />
              </td>
              <td class="align-middle">
                <a href="#" @click="getProduct(item.product_id)">
                  {{ item.title }}</a
                >
              </td>
              <td class="align-middle">{{ item.qty }}/{{ item.unit }}</td>
              <td class="align-middle">{{ item.price }}</td>
              <td class="align-middle">{{ item.price * item.qty }}</td>
              <td class="align-middle">
                <button
                  type="button"
                  class="btn btn-outline-light btn-sm "
                  @click="deleteCart(item)"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-right">
          <router-link class="btn btn-primary mt-4" to="/checkout"
            >結帳去</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventVue from "../eventVue";
import $ from "jquery";
export default {
  data() {
    return {
      isLoading: false,
      cartData: JSON.parse(localStorage.getItem("cartData")) || [],
      cartNum: 0
    };
  },
  methods: {
    getCart() {
      const vm = this;
      eventVue.$on("cartData", cartData => {
        this.cartData = cartData;
        vm.cartNum = this.cartData.length;
      });
    },
    getProduct(id) {
      const vm = this;
      vm.$router.push(`/SingleProduct/${id}`);
    },
    toProducts(visibilty) {
      const vm = this;
      localStorage.setItem("visibilty", JSON.stringify(visibilty));
      vm.$router.push(`/products`);
    },
    deleteCart(item2) {
      const vm = this;
      vm.cartData.forEach((item, key) => {
        if (item2.product_id === item.product_id) {
          vm.cartData.splice(key, 1);
        }
        console.log(vm.cartData);
      });
      localStorage.setItem("cartData", JSON.stringify(vm.cartData));
      eventVue.$emit("cartData", vm.cartData);
      vm.$bus.$emit("number");
      vm.$bus.$emit("message:push", "已移除該商品", "danger");
    }
  },
  created() {
    this.getCart();
  }
};
</script>
