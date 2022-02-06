<template>
  <div>
    <section class="container-fluid main py-5 px-5">
      <form class="form-signin py-5">
        <img
          src="https://upload.cc/i1/2022/01/29/dxX9yw.png"
          alt=""
          style="width:300px;height:250px"
          class="mb-4"
        />
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input
          v-model="user.username"
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
        />
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          v-model="user.password"
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
        />
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button
          @click="signin()"
          class="btn btn-lg btn-primary btn-block"
          type="submit"
        >
          Sign in
        </button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017-2021</p>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    signin() {
      const api = `${process.env.APIPATH}/admin/signin`;
      const vm = this;

      this.$http.post(api, vm.user).then(response => {
        if (response.data.success) {
          const { token, expired } = response.data;
          document.cookie = `hexToken=${token}; expires=${expired}`;
          vm.$router.push("/admin/editproducts");
        }
      });
    }
  },
  created() {
    window.scroll(0, 100);
  }
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
