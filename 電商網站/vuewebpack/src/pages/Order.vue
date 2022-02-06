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
              訂單確認
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
          <div class="line "></div>
          <div
            class="circle  bg-info text-light d-flex justify-content-center align-items-center"
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
        <div class="col-md-7 mb-5 ml-1">
          <div class="accordion" id="accordionExample">
            <div class="card">
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
                    <p class="h5 ">購物車明細</p>
                  </a>
                </h2>
              </div>

              <div
                id="collapseOne"
                class="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body" style="border-bottom:solid 1px gray">
                  <table class="table text-secondary">
                    <thead>
                      <th width="100">商品資料</th>
                      <th></th>
                      <th>數量</th>
                      <th width="150">單件價格</th>
                      <th width="100" class="text-right">小計</th>
                    </thead>
                    <tbody>
                      <tr v-for="item in order.products" :key="item.id">
                        <td class="align-middle">
                          <img
                            :src="item.product.imageUrl"
                            class="img-fluid"
                            alt=""
                            style="width:70px;height:70px"
                          />
                        </td>
                        <td class="align-middle">
                          {{ item.product.title }}
                          <div class="text-success" v-if="percent > 0">
                            已套用優惠券
                          </div>
                        </td>
                        <td class="align-middle">
                          {{ item.qty }}/{{ item.product.unit }}
                        </td>
                        <td class="align-middle ">
                          NT${{ item.product.price }}
                        </td>
                        <td
                          class="align-middle text-right text-success"
                          v-if="percent > 0"
                        >
                          NT$ {{ item.product.price * (percent / 100) }}
                        </td>
                        <td class="align-middle text-right" v-else>
                          NT$ {{ item.product.price }}
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3" class="align-middle"></td>
                        <td class="align-middle text-right">
                          <p>合計</p>
                          <p>運費</p>
                        </td>
                        <td class="align-middle text-right">
                          <p class="text-right" v-if="percent > 0">
                            NT${{ order.total * (percent / 100) }}
                          </p>
                          <p v-else>NT${{ order.total }}</p>
                          <p v-if="order.total >= 1000 || order.total == 0">
                            NT$0
                          </p>
                          <p v-else>
                            NT$60
                          </p>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot></tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-5">
            <div class="card-body text-secondary p-0">
              <h5 class="card-title text-secondary bg-light p-3">訂單資訊</h5>
              <table class="table">
                <tbody>
                  <tr>
                    <th width="100">Email</th>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th>收件人姓名</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th>收件人電話</th>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>收件人地址</th>
                    <td>{{ order.user.address }}</td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <span v-if="!order.is_paid" class="text-danger"
                        >尚未付款</span
                      >
                      <span v-else class="text-success">付款完成</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="d-flex justify-content-around pb-3">
                <router-link
                  to="/products"
                  class="btn btn-outline-info text-dark"
                  style="width:250px"
                  >繼續購物</router-link
                >
                <a
                  class="btn btn-info text-dark"
                  style="width:250px"
                  @click="payOrder"
                  v-if="!order.is_paid"
                >
                  <i
                    class="fas fa-spinner fa-spin"
                    v-if="status.loadingItem"
                  ></i
                  >確認付款去</a
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
      allcart: [],
      order: {
        user: {}
      },
      status: {
        loadingItem: false
      },
      isLoading: false,
      orderId: "",
      percent: JSON.parse(localStorage.getItem("percent"))
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        vm.order = response.data.order;
        vm.isLoading = false;
        console.log(vm.order.products);
      });
      eventVue.$emit("cartData", vm.cartData);
    },
    payOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${vm.orderId}`;
      vm.status.loadingItem = false;
      this.$http.post(url).then(response => {
        if (response.data.success) {
        }
        vm.status.loadingItem = false;
        console.log(response);
      });
      vm.getOrder();
    }
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
    window.scroll(0, 100);
  }
};
</script>
