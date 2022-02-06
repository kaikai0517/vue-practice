<template>
  <div>
    <loading :active.sync="isLoading"
      ><div class="loadingio-spinner-bean-eater-irme2m4ijyi">
        <div class="ldio-304or83fgtn">
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div></div
    ></loading>
    <div class="container-fluid main py-5">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="d-flex mb-5 ml-4">
            <div class="breadcrumb-item">
              <router-link to="/"><i class="fas fa-home"></i></router-link>
            </div>
            <div class="breadcrumb-item active" aria-current="page">
              訂單結帳
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="d-flex justify-content-center">
          <div
            class="circle  bg-info text-light d-flex justify-content-center align-items-center"
          >
            1
          </div>
          <div class="line opacity-5"></div>
          <div
            class="circle opacity-5  bg-info text-light d-flex justify-content-center align-items-center"
          >
            2
          </div>
          <div class="line opacity-5"></div>
          <div
            class="circle opacity-5 bg-info text-light d-flex justify-content-center align-items-center"
          >
            3
          </div>
        </div>
        <div
          class="d-flex justify-content-between my-3"
          style="width:710px; margin-left:115px"
        >
          <p class="text-secondary">購物車</p>
          <p class="text-secondary">填寫資料</p>
          <p class="text-secondary">訂單確認</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-7 mb-5 ml-5">
          <div class="card mb-5 ">
            <div class="card-body p-0">
              <h5 class="card-title p-3 text-secondary bg-light mb-0">
                購物車
              </h5>
              <table class="table text-secondary">
                <thead>
                  <th width="100"></th>
                  <th>商品</th>
                  <th width="150">單價</th>
                  <th class="text-center" width="250">數量</th>
                  <th width="100">小記</th>
                  <th width="50"></th>
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
                      {{ item.title }}
                    </td>
                    <td class="align-middle">NT${{ item.price }}</td>
                    <td class="align-middle">
                      <div class="input-group ml-3" style="width:200px">
                        <div class="input-group-prepend">
                          <button
                            class="btn btn-light"
                            type="button"
                            v-if="item.qty > 1"
                            @click="minus(item)"
                          >
                            -
                          </button>
                        </div>
                        <input
                          type="text"
                          class="form-control text-center"
                          placeholder=""
                          aria-label=""
                          aria-describedby="basic-addon1"
                          v-model="item.qty"
                        />
                        <div class="input-group-prepend">
                          <button
                            class="btn btn-light"
                            type="button"
                            @click="add(item)"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle">NT${{ item.price * item.qty }}</td>
                    <td class="align-middle text-right">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        @click="deleteCart(item.product_id)"
                      >
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-5 ">
          <div class="card mb-5" style="width:350px">
            <div class="card-body text-secondary p-0">
              <h5 class="card-title text-secondary bg-light p-3">訂單資訊</h5>
              <p class="text-info text-right mr-3" v-if="getTotal >= 1000">
                (滿1000免運)
              </p>
              <div class="d-flex justify-content-between pl-3 pr-3 pt-3 pb-0">
                <p class="card-text ">小記：</p>
                <p class="card-text">NT${{ getTotal }}</p>
              </div>
              <div class="d-flex justify-content-between pl-3 pr-3 ">
                <p class="card-text">運費：</p>
                <p class="card-text" v-if="getTotal >= 1000 || getTotal == 0">
                  NT$0
                </p>
                <p class="card-text" v-else>NT$60</p>
              </div>
              <hr />
              <div class="d-flex justify-content-between pl-3 pr-3 pt-2">
                <p class="card-text">合計：</p>
                <p class="card-text">NT${{ getTotal }}</p>
              </div>

              <div class="d-flex justify-content-around pb-3">
                <router-link
                  to="/products"
                  class="btn btn-outline-info text-dark"
                  style="width:150px"
                  >繼續購物</router-link
                >
                <a
                  class="btn btn-info text-dark"
                  style="width:150px"
                  @click="goCheckout"
                >
                  <i
                    class="fas fa-spinner fa-spin"
                    v-if="status.loadingItem"
                  ></i
                  >前往結賬</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventVue from "../eventVue";
export default {
  data() {
    return {
      cartData: JSON.parse(localStorage.getItem("cartData")) || [],
      total: 0,
      isLoading: false,
      status: {
        loadingItem: false
      },
      newPrice: 0
    };
  },
  methods: {
    getCart() {
      eventVue.$on("cartData", cartData => {
        this.cartData = cartData;
      });
    },
    add(item2) {
      const vm = this;

      vm.cartData.forEach(item => {
        if (item2.product_id === item.product_id) {
          item.qty = parseInt(item.qty);
          item.qty += 1;
        }
      });
      localStorage.setItem("cartData", JSON.stringify(vm.cartData));
      eventVue.$emit("cartData", vm.cartData);
    },
    minus(item2) {
      const vm = this;
      vm.cartData.forEach(item => {
        if (item2.product_id === item.product_id) {
          item.qty -= 1;
        }
      });
      localStorage.setItem("cartData", JSON.stringify(vm.cartData));
      eventVue.$emit("cartData", vm.cartData);
    },
    goCheckout() {
      const vm = this;
      vm.status.loadingItem = true;
      vm.$router.push(`/Infor`);
      vm.status.loadingItem = false;
    },
    deleteCart(item2) {
      const vm = this;
      vm.cartData.forEach((item, key) => {
        if (item2 === item.product_id) {
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
  computed: {
    getTotal() {
      const vm = this;
      vm.total = 0;
      vm.cartData.forEach(function(item) {
        item.price = parseInt(item.price);
        vm.total += item.price * item.qty;
      });
      return vm.total;
    }
  },
  created() {
    this.isLoading = true;
    this.getCart();
    window.scroll(0, 100);
  },
  mounted() {
    this.isLoading = false;
  }
};
</script>
