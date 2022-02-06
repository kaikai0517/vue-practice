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
          <div class="line "></div>
          <div
            class="circle   bg-info text-light d-flex justify-content-center align-items-center"
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
      <validation-observer v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(pushCart)" class="text-secondary">
          <div class="row justify-content-center">
            <div class="col-md-7 mb-5 ml-5">
              <div class="card mb-5">
                <div class="card-body p-0">
                  <h5 class="card-title p-3  text-secondary bg-light mb-0">
                    顧客資料
                  </h5>

                  <div class="p-3">
                    <validation-provider
                      rules="required|email"
                      v-slot="{ errors, classes }"
                    >
                      <!-- 輸入框 -->
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          v-model="form.user.email"
                          class="form-control"
                          :class="classes"
                        />
                        <!-- 錯誤訊息 -->
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                      </div>
                    </validation-provider>
                    <validation-provider
                      rules="required"
                      v-slot="{ errors, classes }"
                    >
                      <!-- 輸入框 -->
                      <div class="form-group">
                        <label for="username">收件人姓名</label>
                        <input
                          id="email"
                          type="text"
                          name="姓名"
                          v-model="form.user.name"
                          class="form-control"
                          :class="classes"
                        />
                        <!-- 錯誤訊息 -->
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                      </div>
                    </validation-provider>
                    <validation-provider
                      rules="required"
                      v-slot="{ errors, classes }"
                    >
                      <!-- 輸入框 -->
                      <div class="form-group">
                        <label for="usertel">收件人電話</label>
                        <input
                          id="usertel"
                          type="tel"
                          name="電話"
                          v-model="form.user.tel"
                          class="form-control"
                          :class="classes"
                        />
                        <!-- 錯誤訊息 -->
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                      </div>
                    </validation-provider>
                    <validation-provider
                      rules="required"
                      v-slot="{ errors, classes }"
                    >
                      <div class="form-group">
                        <input
                          class="js-demeter-tw-zipcode-selector"
                          data-city="#city"
                          data-dist="#dist"
                          style="display:none"
                          placeholder="請輸入郵遞區號"
                        />
                        <label for="useraddress">收件人地址</label>

                        <input
                          id="useraddress"
                          type="text"
                          name="地址"
                          v-model="form.user.address"
                          class="form-control"
                          :class="classes"
                        />
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                      </div>
                    </validation-provider>
                    <div class="form-group">
                      <label for="comment">訂單備註</label>
                      <textarea
                        name=""
                        id="comment"
                        class="form-control"
                        placeholder="有什麼想告訴紅氣球的嗎?"
                        cols="30"
                        rows="10"
                        v-model="form.message"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="accordion" id="accordionExample">
                <div class="card" style="width:350px">
                  <div class="card-header p-1" id="headingOne">
                    <h2 class="mb-0">
                      <a
                        class="btn btn-link btn-block collapsed text-left text-secondary "
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        <p class="h5 ">購物車</p>
                      </a>
                    </h2>
                  </div>

                  <div
                    id="collapseOne"
                    class="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div
                      class="card-body"
                      style="border-bottom:solid 1px gray"
                      v-for="item in cartData"
                      :key="item.id"
                    >
                      <div class="d-flex">
                        <img
                          :src="item.imageUrl"
                          class="img-fluid mr-3"
                          alt=""
                          style="width:70px;height:70px"
                        />
                        {{ item.title }}
                      </div>
                      <div class="d-flex justify-content-between">
                        <div>{{ item.qty }}/{{ item.unit }}</div>
                        <div>NT${{ item.price * item.qty }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-5" style="width:350px">
                <div class="card-body text-secondary p-0">
                  <h5 class="card-title text-secondary bg-light p-3">
                    訂單資訊
                  </h5>
                  <div
                    class="d-flex justify-content-between pl-3 pr-3 pt-3 pb-0"
                  >
                    <p class="card-text ">小記：</p>
                    <p class="card-text">NT${{ getTotal }}</p>
                  </div>
                  <div
                    class="d-flex justify-content-between text-success pl-3 pr-3  pb-0"
                    v-if="isSuccess"
                  >
                    <p class="card-text ">折扣：</p>
                    <p class="card-text">
                      NT${{ getTotal - getTotal * (percent / 100) }}
                    </p>
                  </div>
                  <div class="d-flex justify-content-between pl-3 pr-3 ">
                    <p class="card-text">運費：</p>
                    <p
                      class="card-text"
                      v-if="getTotal >= 1000 || getTotal == 0"
                    >
                      NT$0
                    </p>
                    <p class="card-text" v-else>NT$60</p>
                  </div>
                  <div class="input-group mt-3">
                    <input
                      type="text"
                      class="form-control mx-1"
                      aria-label="Recipient's username"
                      placeholder="請輸入優惠碼"
                      v-model="couponcode"
                      aria-describedby="button-addon2"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-primary btn-sm"
                        type="button"
                        id="button-addon2"
                        @click="useCoupon"
                      >
                        傳送
                      </button>
                    </div>
                  </div>

                  <div class="d-flex pl-3 pt-2 text-dark align-items-center">
                    <p class="card-text mt-3">輸入</p>
                    <a
                      class="btn btn-sm btn-warning copy-code-button text-secondary "
                      :data-clipboard-text="'lbrbooks0204'"
                      @click="copy"
                    >
                      lbrbooks0204
                    </a>
                    <p class="card-text">即可享有9折優惠</p>
                  </div>

                  <div
                    class="d-flex justify-content-between pl-3 pr-3 pt-2"
                    v-if="!isSuccess"
                  >
                    <p class="card-text">合計：</p>
                    <p class="card-text">NT${{ getTotal }}</p>
                  </div>
                  <div
                    class="d-flex justify-content-between pl-3 pr-3 pt-2 text-success"
                    v-if="isSuccess"
                  >
                    <p class="card-text">合計：</p>
                    <p class="card-text">NT${{ getTotal * (percent / 100) }}</p>
                  </div>
                  <div class="d-flex justify-content-around pb-3">
                    <router-link
                      to="/checkout"
                      class="btn btn-outline-info text-dark"
                      style="width:150px"
                      >返回購物車</router-link
                    >

                    <button class="btn btn-info text-dark" style="width:150px">
                      <i
                        class="fas fa-spinner fa-spin"
                        v-if="status.loadingItem"
                      ></i
                      >提交訂單
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import eventVue from "../eventVue";
import Clipboard from "clipboard";
export default {
  data() {
    return {
      cartData: JSON.parse(localStorage.getItem("cartData")) || [],
      total: 0,
      isLoading: false,
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: ""
        },
        message: ""
      },
      status: {
        loadingItem: ""
      },
      isSuccess: false,
      couponcode: "",
      percent: 90
    };
  },
  methods: {
    getCart() {
      const vm = this;
      eventVue.$on("cartData", cartData => {
        this.cartData = cartData;
      });
      localStorage.setItem("percent", JSON.stringify(0));
      vm.isSuccess = false;
    },
    useCoupon() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      vm.isLoading = true;
      const coupon = {
        code: vm.couponcode
      };
      vm.$http.post(api, { data: coupon }).then(response => {
        vm.isLoading = false;

        if (response.data.success === true) {
          vm.$bus.$emit("message:push", "已使用優惠卷", "success");
          vm.isSuccess = true;
        } else vm.$bus.$emit("message:push", "此序號不存在", "danger");
      });
      localStorage.setItem("percent", JSON.stringify(vm.percent));
    },
    copy() {
      var vm = this;
      var clipboard = new Clipboard(".copy-code-button");
      clipboard.on("success", e => {
        vm.$bus.$emit("message:push", "以複製到剪貼簿", "success");
        clipboard.destroy();
      });
      clipboard.on("error", e => {
        clipboard.destroy();
      });
    },
    pushCart() {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      vm.status.loadingItem = true;
      vm.cartData.forEach(function(item) {
        const cart = {
          product_id: item.product_id,
          qty: item.qty
        };
        console.log(vm.cartData);
        vm.$http.post(url, { data: cart }).then(response => {});
      });
      setTimeout(() => {
        vm.createOrder();
      }, 1000);
    },
    createOrder() {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
      const vm = this;
      const order = vm.form;
      this.$http.post(url, { data: order }).then(response => {
        console.log("訂單已建立", response.data);
        if (response.data.success) {
          localStorage.removeItem("cartData");
          vm.$router.push(`/order/${response.data.orderId}`);
        }
        vm.status.loadingItem = false;
      });
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
