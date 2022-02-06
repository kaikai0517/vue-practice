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
    <section class="container-fluid main py-5 ">
      <div style="position:relative;margin-bottom:1900px">
        <div class="text">
          <div class="h1 mb-5">
            紅氣球書屋
          </div>
          <div>
            <a
              class="text-dark"
              href="https://www.bing.com/local?lid=YN8501x14632496758160568280&id=YN8501x14632496758160568280&q=%e7%b4%85%e6%b0%a3%e7%90%83%e6%9b%b8%e5%b1%8b&name=%e7%b4%85%e6%b0%a3%e7%90%83%e6%9b%b8%e5%b1%8b&cp=22.006099700927734%7e120.7493896484375&ppois=22.006099700927734_120.7493896484375_%e7%b4%85%e6%b0%a3%e7%90%83%e6%9b%b8%e5%b1%8b"
              ><i class="fas fa-map-marker-alt"></i> 946
              屏東縣恆春鎮城北里21鄰北門路110巷86號</a
            >
          </div>
          <div><i class="far fa-circle mr-3"></i>週三四五 13:30-18:00</div>
          <div><i class="far fa-circle mr-3"></i>週六日 11:00-18:00</div>
          <div><i class="far fa-circle mr-3"></i>公休日 每週一二</div>
          <div><i class="fas fa-mobile-alt mr-3"></i>0934 149 657</div>
          <div><i class="far fa-envelope mr-3"></i>lbrbooks2017@gmail.com</div>
        </div>
        <div
          style="background-image: url('https://upload.cc/i1/2022/02/05/FSRpCq.jpg');height: 1000px;width:1000px;background-position: center right;
    background-size: cover;position:absolute;right:0;"
        >
          <p
            class="text-secondary"
            style="writing-mode: vertical-lr;font-size:50px;position:absolute;right:0;top:20px"
          >
            城小東
          </p>
          <div style="position:absolute;font-size:25px;right:350px;top:250px">
            <p class="bg-light">特性：小屁孩</p>
            <p class="bg-light">先用手讓我聞一聞</p>
            <p class="bg-light">❤️拍屁股！摸摸</p>
            <p class="bg-light">😡不喜歡摸四肢和肚子！</p>
          </div>
        </div>
        <div
          style="background-image: url('https://upload.cc/i1/2022/02/05/0rK5Pa.jpg');height: 1000px;width:1000px;background-position: center right;
    background-size: cover;position:absolute;left:0;top:700px"
        >
          <p
            class="text-secondary"
            style="writing-mode: vertical-lr;font-size:50px;position:absolute;right:0;top:20px"
          >
            林迪索
          </p>
          <div style="position:absolute;font-size:25px;right:130px;top:350px">
            <p class="bg-light">特性：愛打架</p>
            <p class="bg-light">摸太久容易生氣</p>
            <p class="bg-light">❤️摸頭和背部</p>
            <p class="bg-light">😡不喜歡摸四肢和拍屁股</p>
          </div>
        </div>
        <div class="bg-light" style="position:absolute;top:1550px;right:0">
          <div class="h1 mb-4">
            《打工換宿小幫手 徵求文》
          </div>
          <div>
            換宿日期：2021/2/24開始，最短14天以上
          </div>
          <div>
            工作時數：配合書店營業時間，工作天數跟闆娘討論安排，其他時間自由活動。
          </div>
          <div>
            工作項目：在恆春古城旁邊閱讀、在藍天白雲下跟貓咪玩耍、幫忙顧店讓老闆跟闆娘有時間手牽手去吃飯、參加各種活動、照顧還處於牙牙學語的紅氣球書屋第二代接班人。
          </div>
          <div>
            附加福利：住在浪漫的書店裡面享受窗外無敵景緻、衝到海邊去玩耍只要15分鐘、由你安排一次你的選書推薦、免費參加店內活動或講座、工作日免費飲料一杯。
          </div>
          <div>
            加分技能：文字編輯/影像紀錄/美術設計/樂器彈奏/保母/其他。
          </div>
          <div>
            自我介紹:姓名、性別、身分證字號、手機號碼、e-mail、學經歷、目前在職或就學單位、生活照、自我介紹500字以上以及「你最近看過的五本書及書本的簡短介紹」，請用MAIL聯絡我們。
            LBRBOOKS2017@GMAIL.COM
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
      isLoading: false
    };
  },
  created() {
    this.isLoading = true;
  },
  mounted() {
    this.isLoading = false;
  }
};
</script>
