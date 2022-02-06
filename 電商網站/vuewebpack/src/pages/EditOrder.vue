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
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="130">Email</th>
          <th width="100">收件人姓名</th>
          <th width="150">收件人電話</th>
          <th width="100">收件人地址</th>
          <th width="120">付款狀態</th>
          <th width="80">備註</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td>{{ item.user.email }}</td>
          <td>{{ item.user.name }}</td>
          <td>
            {{ item.user.tel }}
          </td>
          <td>
            {{ item.user.address }}
          </td>
          <td>
            <span v-if="item.is_paid" class="text-success">尚未付款</span>
            <span v-else>付款完成</span>
          </td>
          <td>
            {{ item.messages }}
          </td>
        </tr>
      </tbody>
    </table>

    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center d-flex mt-5">
        <li
          class="page-item"
          :class="{ disabled: !pagination.has_pre }"
          @click.prevent="getOrders(pagination.current_page - 1)"
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
          <a class="page-link" href="#" @click.prevent="getOrders(page)">{{
            page
          }}</a>
        </li>
        <li
          class="page-item"
          :class="{ disabled: !pagination.has_next }"
          @click.prevent="getOrders(pagination.current_page + 1)"
        >
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
      isLoading: false,
      pagination: {}
    };
  },
  methods: {
    // 取得資料
    getOrders(page = 1) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/orders?page=${page}`;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        vm.orders = response.data.orders;
        vm.isLoading = false;
        vm.pagination = response.data.pagination;
        console.log(vm.orders);
      });
    }
  },
  created() {
    this.getOrders();
  }
};
</script>
