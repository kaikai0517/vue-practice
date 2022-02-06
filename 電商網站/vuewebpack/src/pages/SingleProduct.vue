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
          <div class="jumbotron jumbotron-fluid">
            <div class="d-flex text-light ml-3 align-items-center">
              <p class="lead">
                輸入優惠碼
              </p>
              <p>
                <a
                  class=" btn btn-light copy-code-button text-primary h5 mb-3"
                  :data-clipboard-text="'lbrbooks0204'"
                  @click="copy"
                >
                  lbrbooks0204
                </a>
              </p>
              <p class="lead">
                即可享有9折優惠！
              </p>
            </div>
          </div>
          <div class="d-flex mb-5 ml-4">
            <div class="breadcrumb-item">
              <router-link to="/"><i class="fas fa-home"></i></router-link>
            </div>
            <div class="breadcrumb-item">
              <router-link to="/products">商品介紹</router-link>
            </div>
            <div class="breadcrumb-item active" aria-current="page">
              {{ singleProduct.title }}
            </div>
          </div>
        </div>
      </div>
      <div class="container ">
        <div class="row mb-5 pb-5">
          <div class="col-lg-6 p-0">
            <img
              :src="singleProduct.imageUrl"
              class="img-fluid "
              alt=""
              style="height:350px;width:100%"
            />
          </div>
          <div class="col-lg-6 pl-5 justify-content-center">
            <h2 class="text-secondary">{{ singleProduct.title }}</h2>
            <span class="badge badge-info"
              ><i class="fas fa-ribbon mr-2"></i
              >{{ singleProduct.category }}</span
            >
            <p
              class="text-secondary pl-2 my-3"
              style="border-left: 5px solid #C76331"
            >
              全店單筆滿1000免運費!!!!
            </p>

            <h5 class="mt-4 mb-3 text-secondary">售價</h5>
            <div class="sale text-danger font-weight-bold h5">
              NT${{ singleProduct.price }}
            </div>
            <h5 class="mt-4 mb-3 text-secondary">數量</h5>
            <div class="input-group mb-3" style="width:200px">
              <div class="input-group-prepend">
                <button
                  class="btn btn-light"
                  type="button"
                  @click="singleProduct.num -= 1"
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
                v-model="singleProduct.num"
              />
              <div class="input-group-prepend">
                <button
                  class="btn btn-light"
                  type="button"
                  @click="singleProduct.num += 1"
                >
                  +
                </button>
              </div>
            </div>

            <div class="mt-2">
              <router-link
                class=" btn btn-outline-secondary"
                to="/products"
                style="width:150px"
              >
                回菜單
              </router-link>
              <button
                class="addCartBtn btn btn-secondary"
                @click="addcart(singleProduct)"
                style="width:150px"
              >
                加入購物車
              </button>
            </div>
          </div>
          <h3
            class="mt-5 mb-3 pl-2 text-secondary"
            style="border-left: 5px solid #C76331"
          >
            產品說明
          </h3>
          <p class="mb-4 mt-4 text-secondary">
            {{ singleProduct.description }}
          </p>
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
      singleProduct: {},
      isLoading: false,
      cartData: JSON.parse(localStorage.getItem("cartData")) || [],
      products: []
    };
  },
  methods: {
    getSingleproduct(id) {
      const vm = this;
      id = vm.$route.params.id;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      vm.isLoading = true;
      vm.$http.get(api).then(response => {
        vm.isLoading = false;
        vm.singleProduct = response.data.product;
        vm.singleProduct.num = 1;
      });
    },
    addcart(data) {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      const cacheCarID = [];
      vm.cartData.forEach(item => cacheCarID.push(item.product_id));
      if (cacheCarID.indexOf(data.id) === -1) {
        const cartContent = {
          product_id: data.id,
          qty: data.num,
          title: data.title,
          price: data.price,
          imageUrl: data.imageUrl,
          unit: data.unit
        };
        vm.cartData.push(cartContent);
        console.log(vm.cartData);
      } else {
        let cache = {};
        vm.cartData.forEach((item, keys) => {
          if (item.product_id === data.id) {
            cache = {
              product_id: data.id,
              qty: (item.qty += data.num),
              title: data.title,
              price: data.price * item.qty,
              imageUrl: data.imageUrl,
              unit: data.unit
            };
            vm.cartData.splice(keys, 1);
          }
        });
        vm.cartData.push(cache);
      }
      localStorage.setItem("cartData", JSON.stringify(vm.cartData));
      eventVue.$emit("cartData", vm.cartData);
      vm.$bus.$emit("number");
      vm.$bus.$emit("message:push", "已加入購物車", "primary");
    },
    copy() {
      var vm = this;
      var clipboard = new Clipboard(".copy-code-button");
      clipboard.on("success", e => {
        vm.$bus.$emit("message:push", "以複製到剪貼簿", "primary");
        clipboard.destroy();
      });
      clipboard.on("error", e => {
        clipboard.destroy();
      });
    }
  },
  created() {
    this.getSingleproduct();
    window.scroll(0, 100);
  }
};
</script>
