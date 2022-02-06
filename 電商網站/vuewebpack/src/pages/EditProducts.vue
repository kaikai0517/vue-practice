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
    <div class="text-right mt-4">
      <button class="btn btn-primary mr-3" @click="openModal(true)">
        建立新的產品
      </button>
      <router-link class="btn btn-secondary mr-3" to="/">回首頁</router-link>
      <a class="btn btn-danger" href="#" @click.prevent="signout">Sign out</a>
    </div>
    <div class="row mt-4 ">
      <table class="table mt-4">
        <thead>
          <tr>
            <th width="120">分類</th>
            <th>產品名稱</th>
            <th width="120">原價</th>
            <th width="120">售價</th>
            <th width="100">是否啟用</th>
            <th width="80">編輯</th>
            <th width="80">刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="text-right">{{ item.origin_price | currency }}</td>
            <td class="text-right">{{ item.price | currency }}</td>
            <td>
              <span v-if="item.is_enabled" class="text-success">啟用</span>
              <span v-if="!item.is_enabled">未啟用</span>
            </td>
            <td>
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openModal(false, item)"
              >
                編輯
              </button>
            </td>
            <td>
              <button
                class="btn btn-outline-primary btn-sm"
                @click="deleteModal(item)"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <nav aria-label="Page navigation example ">
      <ul class="pagination justify-content-center d-flex mt-5">
        <li
          class="page-item"
          :class="{ disabled: !pagination.has_pre }"
          @click.prevent="getProducts(pagination.current_page - 1)"
        >
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="page in pagination.total_pages"
          :key="page"
          :class="{ active: pagination.current_page === page }"
        >
          <a class="page-link" href="#" @click.prevent="getProducts(page)">{{
            page
          }}</a>
        </li>
        <li
          class="page-item"
          :class="{ disabled: !pagination.has_next }"
          @click.prevent="getProducts(pagination.current_page + 1)"
        >
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <h5 class="modal-title text-white" id="exampleModalLabel">
              新增產品
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-4">
                <form>
                  <div class="form-group">
                    <label for="imageUrl">輸入圖片網址</label>
                    <input
                      v-model="tempProducts.imageUrl"
                      type="email"
                      class="form-control"
                      id="imageUrl"
                      aria-describedby="emailHelp"
                      placeholder="請輸入圖片連結"
                    />
                  </div>
                  <div class="form-group">
                    <label for="customFile"
                      >或 上傳圖片
                      <i
                        class="fas fa-spinner fa-spin"
                        v-if="status.fileUploading"
                      ></i>
                    </label>
                    <input
                      type="file"
                      id="customFile"
                      class="form-control"
                      ref="files"
                      @change="uploadFile"
                    />
                    <img
                      :src="tempProducts.imageUrl"
                      img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </form>
              </div>
              <div class="col-md-8">
                <form>
                  <div class="form-group">
                    <label for="title">標題</label>
                    <input
                      v-model="tempProducts.title"
                      type="email"
                      class="form-control"
                      id="title"
                      aria-describedby="emailHelp"
                      placeholder="請輸入標題"
                    />
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="category">分類</label>
                        <input
                          v-model="tempProducts.category"
                          type="text"
                          class="form-control"
                          id="category"
                          placeholder="請輸入分類"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="unit">單位</label>
                        <input
                          v-model="tempProducts.unit"
                          type="text"
                          class="form-control"
                          id="unit"
                          placeholder="請輸入單位"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="origin_price">原價</label>
                        <input
                          v-model="tempProducts.origin_price"
                          type="text"
                          class="form-control"
                          id="origin_price"
                          placeholder="請輸入原價"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="price">售價</label>
                        <input
                          v-model="tempProducts.price"
                          type="text"
                          class="form-control"
                          id="price"
                          placeholder="請輸入售價"
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="form-group">
                    <label for="description">產品描述</label>
                    <textarea
                      v-model="tempProducts.description"
                      class="form-control"
                      id="description"
                      rows="2"
                      placeholder="請輸入產品描述"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label for="content">說明內容</label>
                    <textarea
                      v-model="tempProducts.content"
                      class="form-control"
                      id="content"
                      rows="2"
                      placeholder="請輸入產品說明內容"
                    ></textarea>
                  </div>
                  <div class="form-group form-check">
                    <input
                      v-model="tempProducts.is_enabled"
                      :true-value="1"
                      :false-value="1"
                      type="checkbox"
                      class="form-check-input"
                      id="is_enabled"
                    />
                    <label class="form-check-label" for="is_enabled"
                      >是否啟用</label
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              @click="updateProduct"
              type="button"
              class="btn btn-primary"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      products: [],
      tempProducts: {},
      pagination: {},
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false
      }
    };
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/products?page=${page}`;
      const vm = this;
      vm.isLoading = true;

      this.$http.get(api).then(response => {
        vm.isLoading = false;
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
      });
    },
    updateProduct() {
      let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product`;
      const vm = this;
      let httpMethod = "post";
      if (!vm.isNew) {
        api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product/${vm.tempProducts.id}`;
        httpMethod = "put";
      }
      this.$http[httpMethod](api, { data: vm.tempProducts }).then(response => {
        if (response.data.success) {
          $("#productModal").modal("hide");
          vm.getProducts();
        }
        vm.products = response.data.products;
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProducts = {};
        this.isNew = true;
      } else {
        this.tempProducts = Object.assign({}, item);
        this.isNew = false;
      }
      $("#productModal").modal("show");
    },
    deleteModal(item) {
      const vm = this;
      let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product/${item.id}`;
      this.$http.delete(api, { data: vm.tempProducts }).then(response => {
        if (response.data.success) {
          vm.getProducts();
        }
        vm.products = response.data.products;
      });
    },
    uploadFile() {
      const uploadedFile = this.$refs.files.files[0];
      const vm = this;
      const formData = new FormData();
      formData.append("file-to-upload", uploadedFile);
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/upload`;
      vm.status.fileUploading = true;
      this.$http
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          console.log(response.data);
          vm.status.fileUploading = false;
          if (response.data.success) {
            vm.tempProducts.imageUrl = response.data.imageUrl;
            vm.$set(vm.tempProducts, "imageUrl", response.data.imageUrl);
          } else {
            this.$bus.$emit("message:push", response.data.message, "danger");
          }
        });
    },
    signout() {
      const url = `${process.env.APIPATH}/logout`;
      const vm = this;
      this.$http.post(url).then(response => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push("/login");
        }
      });
    }
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (token !== "") {
      this.axios.defaults.headers.common["Authorization"] = token;
      this.getProducts();
    }
  }
};
</script>
