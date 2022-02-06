<template>
  <div>
    <nav
      id="sidebarMenu"
      class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div class="sidebar-sticky pt-3">
        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span>管理員</span>
          <a
            class="d-flex align-items-center text-muted"
            href="#"
            aria-label="Add a new report"
          >
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2 text-secondary">
          <li class="nav-item">
            <router-link
              class="nav-link text-secondary"
              to="/admin/editproducts"
            >
              <i class="fas fa-box-open mr-2"></i>產品列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-secondary" to="/admin/editorder">
              <i class="far fa-check-square mr-2"></i>訂單列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-secondary" to="/admin/coupon">
              <i class="fas fa-ticket-alt mr-2"></i>優惠卷
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
