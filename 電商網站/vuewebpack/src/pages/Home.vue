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
    <div class="slider_container">
      <div>
        <span
          class="text-white h1"
          style="position:absolute;top:0px;left:0px;font-size:100px"
          >AlRIGHT,GUYS</span
        >
        <span
          class="text-white "
          style="position:absolute;top:110px;left:0px;font-size:30px"
          >紅氣球2.0🎈的一些小小改變</span
        >
        <span
          class="text-secondary "
          style="position:absolute;top:150px;left:0px;font-size:20px"
          >恆春的冬天雖然總是不像冬天<br />
          可是 每天早上頭腦開機的那一杯咖啡 對於剛從棉被裡破繭而出的我而言
          是如此重要</span
        >
        <span
          class="text-white "
          style="position:absolute;top:30px;right:165px;font-size:30px;writing-mode: vertical-lr"
          >#書香配著咖啡香</span
        >
        <span
          class="text-white"
          style="position:absolute;top:10px;right:400px;font-size:25px;writing-mode:vertical-lr"
        >
          #本屋紀事 #咖啡風味聖代 #老派約會 #港口茶風味聖代
        </span>
        <span
          class="text-secondary "
          style="position:absolute;bottom:70px;right:50px;font-size:30px"
          >#精選風味聖代 #南國開賣限量供應</span
        >
        <span
          class="text-white "
          style="position:absolute;bottom:50px;left:300px;font-size:30px;"
          >#neko</span
        >
      </div>
      <div>
        <span
          class="text-white h1"
          style="position:absolute;top:50px;right:300px;font-size:100px"
          >LE BALLON ROUGE</span
        >
        <span
          class="text-white "
          style="position:absolute;top:150px;right:300px;font-size:30px"
          >HENGCHUN</span
        >
        <span
          class="text-secondary "
          style="position:absolute;top:280px;right:0px;font-size:30px"
          >#書本影像有時還有cat</span
        >
        <span
          class="text-white "
          style="position:absolute;top:310px;right:165px;font-size:30px"
          >#百年古城</span
        >
        <span
          class="text-secondary "
          style="position:absolute;bottom:0px;left:0px;font-size:30px"
          >#來看看我們的樣子</span
        >
        <span
          class="text-white "
          style="position:absolute;bottom:50px;left:0px;font-size:30px"
          >#歡迎一起想像紅氣球未來的模樣</span
        >
      </div>
      <div>
        <span class="page3 typing text-white h1">全新聖代現正熱賣中</span>
      </div>
    </div>

    <section class="container-fluid main py-5 px-5">
      <div class="row my-5 pt-5">
        <div class="col-md-8 pl-5 mt-5" style="positon:relative">
          <div>
            <p
              class="text-white "
              style="position:absolute;top:-70px;right:100px;font-size:50px"
            >
              LE BALLON ROUGE
            </p>
            <p
              class="text-white "
              style="position:absolute;top:-10px;right:150px;font-size:50px"
            >
              LE BALLON ROUGE
            </p>
            <p
              class="text-white "
              style="position:absolute;top:50px;right:200px;font-size:50px"
            >
              LE BALLON ROUGE
            </p>
            <p
              class="text-white "
              style="position:absolute;top:110px;right:250px;font-size:50px"
            >
              LE BALLON ROUGE
            </p>
            <p
              class="text-white "
              style="position:absolute;top:160px;right:300px;font-size:50px"
            >
              LE BALLON ROUGE
            </p>
            <p
              class="text-white "
              style="position:absolute;top:220px;right:350px;font-size:50px"
            >
              LE BALLON ROUGE
            </p>
            <p
              class="text-white "
              style="position:absolute;top:280px;right:400px;font-size:50px"
            >
              LE BALLON ROUGE
            </p>
          </div>

          <div
            class="btn-group type mt-5"
            role="group"
            aria-label="Basic example"
            style="position:relative"
          >
            <a
              type="button"
              class="btn btn-secondary hvr-grow-shadow drink text-white"
              @click="toProducts('drink')"
              style="position:absplute;top:-100px"
              ><span class="badge badge-secondary p-3">飲品</span>
            </a>
            <a
              type="button"
              class="btn btn-secondary hvr-grow-shadow ice  text-white"
              @click="toProducts('sundae')"
              ><span class="badge badge-secondary p-3">聖代</span></a
            >
            <a
              type="button"
              class="btn btn-secondary hvr-grow-shadow room  text-white"
              @click="toProducts('coffee')"
              style="position:absplute;bottom:-100px"
              ><span class="badge badge-secondary p-3">咖啡</span>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="d-flex mb-4">
            <p
              class="text-secondary ml-5   h3"
              style="writing-mode: vertical-rl;line-height: 50px"
            >
              時隔一年多<br />在新一年的一開始<br />再次踏上南方的紅氣球。
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center py-5">
        <div class="col-md-5 pt-5">
          <p class="text-dark py-5 text-center">
            當心靜下來時，隱約浮現連自己也說不出的感覺。也許是一個人，也許是一件事，也許是心中埋藏已久的渴望。<br />難以名狀的感受，就像是一個指引，<br />需要與自己對話的指引----
          </p>
        </div>
      </div>

      <div class="container py-5">
        <div class=" about text-secondary">
          <div class="about-title p-4 ">
            LE BALLON ROUGE
          </div>
          <div class="about-content p-5">
            2022的一月，紅氣球書屋整理了新的店內空間，一個舒服自在的溫馨小室。坐在沙發上，望去窗外的山景與古城，想著:
            「有多久沒有與自己對話了呢?」
          </div>
        </div>
      </div>
      <div class="row py-5 about-product text-secondary">
        <div class="col-md-4 about-product1 ">
          <div class="a-p-title p-3 h4">drink</div>
          <div class="a-p-content p-5">
            書店裡的咖啡機更新了 咖啡味道更加濃郁 接下來還要持續增加menu項目
            敬請期待
          </div>
        </div>
        <div class="col-md-4 about-product2">
          <div class="a-p-title p-3 h4">sundae</div>
          <div class="a-p-content p-5">
            昨日推出的 #本屋紀事 三種口味都端上桌面 有人驚嘆著奶酒口味
            有人甜甜地與同伴分享經典香草口味
          </div>
        </div>
        <div class="col-md-4 about-product3">
          <div class="a-p-title p-3 h4">room</div>
          <div class="a-p-content p-5">
            在恆春緩緩邁入第五年的紅氣球，在去年底進行了大改造，從硬體的書櫃設計與規劃、神秘小房間的沙發區域到暗黑小角落，還有未來有更多二樓以上的私房空間開放。​
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: "",
      isLoading: false
    };
  },
  methods: {
    toProducts(visibilty) {
      const vm = this;
      localStorage.setItem("visibilty", JSON.stringify(visibilty));
      vm.$router.push(`/products`);
    }
  },
  created() {
    this.isLoading = true;
  },
  mounted() {
    this.isLoading = false;
  }
};
</script>
