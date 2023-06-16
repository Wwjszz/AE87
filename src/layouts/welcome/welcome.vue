<template>
  <nav class="navbar">
    <div class="logo">
      <img src="/src/assets/logo.jpg" alt="Logo" class="logo-img" />
    </div>
    <ul class="nav-menu">
      <li class="nav-item">
        <a href="#home">首页</a>
      </li>
      <li class="nav-item">
        <a href="#courses">课程</a>
      </li>
      <li class="nav-item">
        <a href="#about">关于我们</a>
      </li>
      <li class="nav-item">
        <a href="#contact">联系我们</a>
      </li>
      <li class="nav-item">
        <a href="#signUp">联系我们</a>
      </li>
    </ul>
  </nav>
  <div id="fullpage">
    <div class="section">
      <div class="welcome-content">
        <h1 class="welcome-title animate">欢迎来到AE87驾校</h1>
        <p class="welcome-description animate">在这里，我们致力于为您提供高质量的驾驶培训和优秀的教学体验。</p>
        <router-link to="/login" class="welcome-button animate">
          <span class="button-text">进入系统</span>
          <font-awesome-icon icon="arrow-alt-circle-right" />
        </router-link>
      </div>
    </div>
    <div class="section">
      <div class="course-card-container">
        <div class="course-card" v-for="course in COURSES" :key="course.id">
          <h3>{{ course.title }}</h3>
          <p>{{ course.description }}</p>
        </div>
      </div>
    </div>
    <div class="section">
      <h2>为什么选择我们</h2>
      <div>
        <div>
          <font-awesome-icon icon="fas fa-chalkboard-teacher" />
          <h3>经验丰富的教练</h3>
          <p>我们拥有经验丰富的驾驶教练，能够提供专业的指导和培训。</p>
        </div>
        <div>
          <font-awesome-icon icon="fas fa-users" />
          <h3>个性化教学方法</h3>
          <p>我们采用个性化的教学方法，根据学员的需求和特点量身定制课程。</p>
        </div>
        <div>
          <font-awesome-icon icon="fas fa-calendar-alt" />
          <h3>灵活的课程安排</h3>
          <p>我们提供灵活的课程安排，以满足学员的时间和学习需求。</p>
        </div>
        <div>
          <font-awesome-icon icon="fas fa-building" />
          <h3>设施齐全</h3>
          <p>我们拥有现代化的培训设施，提供舒适和安全的学习环境。</p>
        </div>
        <div>
          <font-awesome-icon icon="fas fa-tree" />
          <h3>优美的环境</h3>
          <p>我们位于风景优美的地区，提供宜人的学习环境和驾驶体验。</p>
        </div>
      </div>
    </div>
    <div class="section">
      <h2>联系我们</h2>
      <p>如果您有任何疑问或需要进一步了解，请随时联系我们。</p>
      <a href="tel:1234567890">拨打电话</a>
      <a href="mailto:info@example.com">发送邮件</a>
    </div>
    <div class="section">
      <h2>立即报名</h2>
      <form class="signup-form" @submit="submitForm">
        <div class="form-group">
          <label for="name">姓名</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-group">
          <label for="email">邮箱</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div class="form-group">
          <label for="phone">电话号码</label>
          <input type="tel" id="phone" v-model="formData.phone" required />
        </div>
        <div class="form-group">
          <label for="address">地址</label>
          <input type="text" id="address" v-model="formData.address" required />
        </div>
        <div class="form-group">
          <label for="gender">性别</label>
          <select id="gender" v-model="formData.gender" required>
            <option value="">请选择</option>
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </div>
        <div class="form-group">
          <label for="idCard">身份证号码</label>
          <input type="text" id="idCard" v-model="formData.idCard" required />
        </div>
        <div class="form-group">
          <label for="idCard">身份证图片</label>
          <input type="file" id="idCard" accept="image/*" @change="handleFileUpload" />
        </div>
        <button type="submit">提交</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import 'fullpage.js/dist/fullpage.min.css';
import fullpage from 'fullpage.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChalkboardTeacher, faUsers, faCalendarAlt, faBuilding, faTree } from '@fortawesome/free-solid-svg-icons';
import { COURSES } from './constant';

// 将需要使用的图标添加到FontAwesome库中
library.add(faChalkboardTeacher, faUsers, faCalendarAlt, faBuilding, faTree);

const fullPageInstance = ref(null);
const formData = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
  gender: '',
  idCard: '',
});

const submitForm = () => {
  // Access form data here
  const { name, email, phone, address, gender, idCard } = formData.value;

  // Perform form submission logic here

  // Clear form data
  formData.value = {
    name: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
    idCard: '',
  };
};

const handleFileUpload = (event: any) => {
  const file = event.target.files[0];
  // Perform further processing or validation of the uploaded file here
};

const scrollToSection = (sectionAnchor: string) => {
  if (fullPageInstance.value) {
    fullPageInstance.value.fullpage_api.moveTo(sectionAnchor);
  }
};
onMounted(() => {
  fullPageInstance.value = new fullpage('#fullpage', {
    licenseKey: 'gplv3-license',
    navigation: true,
    navigationPosition: 'right',
    fitToSection: true,
    autoScrolling: true,
    lazyLoading: true,
    afterLoad: (origin, destination, direction) => {
      if (destination && destination.item && destination.item.classList) {
        const animatedElements = destination.item.querySelectorAll('.animate');
        animatedElements.forEach((element) => {
          element.classList.remove('animate');
          void element.offsetWidth; // 强制重绘
          element.classList.add('animate');
        });
      }
    },
    anchors: ['home', 'courses', 'about', 'contact', 'signUp'], // 添加锚点
  });
});

onBeforeUnmount(() => {
  fullPageInstance.value.destroy('all');
});
</script>

<style lang="less" src="./home-style.less" scoped></style>
<style lang="less" src="./course-style.less" scoped></style>
<style lang="less" src="./animate.less" scoped></style>
<style lang="less" src="./signUp.less" scoped></style>
<style lang="less" scoped>
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}
</style>
