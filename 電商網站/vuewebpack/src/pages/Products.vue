<template>
  <div>
    <section class="container-fluid main pb-5 pt-3 px-5">
      <div class="vld-parent">
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
      </div>
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
            <div class="breadcrumb-item active" aria-current="page">
              {{ category }}
            </div>
          </div>
        </div>
      </div>
      <div class="row pb-5">
        <div class="col-md-3 ">
          <div class="list-group sticky-top">
            <div
              class="list-group-item list-group-item-action active bg-secondary h4 mb-0"
              aria-current="true"
            >
              商品介紹
            </div>
            <a
              href="#"
              :class="{ active: visibilty == 'all' }"
              @click.prevent="(visibilty = 'all'), (page = 1)"
              class="list-group-item list-group-item-action"
              ><i class="fas fa-boxes mr-2"></i>所有商品</a
            >
            <a
              href="#"
              class="list-group-item list-group-item-action"
              :class="{ active: visibilty == 'coffee' }"
              @click.prevent="(visibilty = 'coffee'), (page = 1)"
              ><i class="fas fa-coffee mr-2"></i>咖啡</a
            >
            <a
              href="#"
              class="list-group-item list-group-item-action"
              :class="{ active: visibilty == 'sundae' }"
              @click.prevent="(visibilty = 'sundae'), (page = 1)"
              ><i class="fas fa-cookie-bite" style="margin-right:11px"></i
              >聖代</a
            >
            <a
              href="#"
              class="list-group-item list-group-item-action"
              :class="{ active: visibilty == 'drink' }"
              @click.prevent="(visibilty = 'drink'), (page = 1)"
              ><i class="fas fa-door-open mr-2"></i>飲品</a
            >
          </div>
        </div>
        <div class="col-md-9">
          <div class="row mb-5 ">
            <div
              class="h4 col-md-4 col-sm-4 py-2 mb-0 ml-3 text-secondary"
              style="border-left: 5px solid #8080C0"
            >
              {{ category }}
            </div>
            <div class="sort col-md-3 col-sm-3">
              <select
                name=""
                id=""
                class="form-control text-dark1"
                v-model="selected"
              >
                <option value="0">預設排序</option>
                <option value="1">依價格低到高排序</option>
                <option value="2">依價格高到低排序</option>
              </select>
            </div>
            <div class="search col-md-4 col-sm-4">
              <div class="d-flex align-items-center ">
                <i class="fas fa-search fa-2x pr-2"></i>
                <input
                  type="text"
                  class="form-control"
                  placeholder="搜尋產品 "
                  v-model="filterText"
                />
              </div>
            </div>
          </div>
          <div class="row animate__animated animate__fadeInUp">
            <div
              class="col-md-4 mb-4 hvr-grow-shadow"
              v-for="item in filterTodo"
              :key="item.id"
            >
              <div class="card border-0 shadow-sm">
                <a
                  type="button"
                  class="btn btn-cart p-0"
                  @click="getProduct(item.id)"
                  style="width:100%"
                >
                  <div
                    class="cart-img d-flex align-items-center justify-content-center hvr-bounce-to-right"
                    style="height: 150px; background-size: cover; background-position: center"
                    :style="{ backgroundImage: `url(${item.imageUrl})` }"
                  >
                    <p>查看更多</p>
                  </div></a
                >
                <div
                  class="card-body"
                  style="position:relative;   background-image: url('https://upload.cc/i1/2022/01/18/SRnyi1.jpeg');background-position: center;"
                >
                  <span
                    class="badge badge-info float-right ml-2"
                    style="position:absolute;right:0"
                    ><i class="fas fa-ribbon mr-2"></i>{{ item.category }}</span
                  >
                  <h5 class="card-title">
                    <div class="text-secondary text-center">
                      {{ item.title }}
                    </div>
                  </h5>
                  <p class="card-text">{{ item.content }}</p>
                  <div
                    class="d-flex justify-content-center align-items-baseline"
                  >
                    <div class="h5" v-if="!item.price">
                      NT${{ item.origin_price }}
                    </div>
                    <div class="h5 text-danger" v-if="item.price">
                      NT${{ item.price }}
                    </div>
                  </div>

                  <button
                    type="button"
                    class="btn btn-secondary  btn-sm  addButton"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    @click="getSingleproduct(item.id)"
                  >
                    <i
                      class="fas fa-spinner fa-spin"
                      v-if="status.loadingItem === item.id"
                    ></i>
                    <i class="fas fa-shopping-cart mr-2"></i>加到購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
          <nav aria-label="Page navigation example ">
            <ul class="pagination d-flex justify-content-center my-5 ">
              <li class="page-item" :class="{ disabled: page === 1 }">
                <a class="page-link" href="#" @click.prevent="page = page - 1"
                  >Previous</a
                >
              </li>
              <li class="page-item" v-for="index in pagination" :key="index">
                <a class="page-link" href="#" @click.prevent="page = index">{{
                  index
                }}</a>
              </li>
              <li class="page-item" :class="{ disabled: page === pagination }">
                <a class="page-link" href="#" @click.prevent="page += 1"
                  >Next</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" style="background-color:#FFEEDD">
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-6">
                <img
                  :src="singleProduct.imageUrl"
                  class="img-fluid "
                  alt=""
                  style="height:200px;width:100%"
                />
              </div>
              <div class="col-lg-6 justify-content-center">
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
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-around">
            <h5 class=" text-secondary">數量</h5>
            <div class="input-group " style="width:150px">
              <div class="input-group-prepend">
                <button
                  class="btn btn-light"
                  type="button"
                  v-if="singleProduct.num > 1"
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
            <button
              class="btn btn-secondary"
              @click="addcart(singleProduct)"
              style="width:150px"
            >
              <i class="fas fa-shopping-cart mr-2"></i>加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventVue from "../eventVue";
import Clipboard from "clipboard";
import $ from "jquery";
export default {
  data() {
    return {
      singleProduct: {},
      category: "",
      products: [],
      pagination: {},
      visibilty: JSON.parse(localStorage.getItem("visibilty")),
      isLoading: false,
      filterText: "",
      selected: "0",
      status: {
        loadingItem: ""
      },
      pageData: [],
      page: "",
      cartData: JSON.parse(localStorage.getItem("cartData")) || []
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
      const vm = this;
      const categoryName = vm.$route.params.categoryname;
      if (categoryName) {
        vm.visibilty = categoryName;
      }
      vm.isLoading = true;

      this.$http.get(api).then(response => {
        vm.isLoading = false;
        vm.products = response.data.products;
        vm.pagination = Math.ceil(vm.products.length / 6);
        vm.page = 1;
      });
    },
    getSingleproduct(id) {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      vm.status.loadingItem = id;
      vm.$http.get(api).then(response => {
        vm.singleProduct = response.data.product;
        vm.singleProduct.num = 1;
        vm.status.loadingItem = "";
      });
    },
    getProduct(id) {
      const vm = this;
      vm.$router.push(`/SingleProduct/${id}`);
    },
    addcart(data) {
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
              price: data.price,
              imageUrl: data.imageUrl,
              unit: data.unit
            };
            vm.cartData.splice(keys, 1);
          }
        });
        vm.cartData.push(cache);
      }
      localStorage.setItem("cartData", JSON.stringify(vm.cartData));
      $("#exampleModal").modal("hide");
      eventVue.$emit("cartData", vm.cartData);
      vm.$bus.$emit("number");
      vm.$bus.$emit("message:push", "已加入購物車", "success");
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
    }
  },
  created() {
    this.getProducts();
    window.scroll(0, 100);
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    filterTodo() {
      const vm = this;

      if (vm.visibilty === "all") {
        vm.category = "所有商品";
        var newTodo = [];
        vm.products.forEach(function(item) {
          if (item.is_enabled === 1) {
            newTodo.push(item);
          }
        });
        vm.pagination = Math.ceil(newTodo.length / 6);
        newTodo = newTodo.slice((vm.page - 1) * 6, (vm.page - 1) * 6 + 6);
        return newTodo
          .filter(function(item) {
            return item.title.match(vm.filterText);
          })
          .sort(function(a, b) {
            if (vm.selected === "1") {
              return a.price - b.price;
            }
            if (vm.selected === "2") {
              return b.price - a.price;
            }
          });

        // eslint-disable-next-line eqeqeq
      } else if (vm.visibilty == "drink") {
        vm.category = "飲品";
        var newTodo = [];
        vm.products.forEach(function(item) {
          if (item.category === "飲品" && item.is_enabled === 1) {
            newTodo.push(item);
          }
        });
        vm.pagination = Math.ceil(newTodo.length / 6);
        vm.newTodo = vm.products.slice(
          (vm.page - 1) * 6,
          (vm.page - 1) * 6 + 6
        );
        return newTodo
          .filter(function(item) {
            return item.title.match(vm.filterText);
          })
          .sort(function(a, b) {
            if (vm.selected === "1") {
              return a.price - b.price;
            }
            if (vm.selected === "2") {
              return b.price - a.price;
            }
          });
      } else if (vm.visibilty === "sundae") {
        vm.category = "聖代";
        const newTodo = [];
        vm.products.forEach(function(item) {
          if (item.category === "聖代" && item.is_enabled === 1) {
            newTodo.push(item);
          }
        });
        vm.pagination = Math.ceil(newTodo.length / 6);
        vm.newTodo = vm.products.slice(
          (vm.page - 1) * 6,
          (vm.page - 1) * 6 + 6
        );
        return newTodo
          .filter(function(item) {
            return item.title.match(vm.filterText);
          })
          .sort(function(a, b) {
            if (vm.selected === "1") {
              return a.price - b.price;
            }
            if (vm.selected === "2") {
              return b.price - a.price;
            }
          });
      } else if (vm.visibilty === "coffee") {
        vm.category = "咖啡";
        const newTodo = [];
        vm.products.forEach(function(item) {
          if (item.category === "咖啡" && item.is_enabled === 1) {
            newTodo.push(item);
          }
        });
        vm.pagination = Math.ceil(newTodo.length / 6);
        vm.newTodo = vm.products.slice(
          (vm.page - 1) * 6,
          (vm.page - 1) * 6 + 6
        );
        return newTodo
          .filter(function(item) {
            return item.title.match(vm.filterText);
          })
          .sort(function(a, b) {
            if (vm.selected === "1") {
              return a.price - b.price;
            }
            if (vm.selected === "2") {
              return b.price - a.price;
            }
          });
      }
    }
  }
};
</script>
