<template>
    <div class="container mt-5">
      <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
      <div class="row">
        <div
          class="col-sm-4 mb-4"
          v-for="(item, index) in items"
          :key="index"
        >
          <div class="card">
            <img
              :src="item.image"
              class="img-fluid card-img-top"
              :alt="item.title"
            />
            <div class="card-body">
              <h3 class="card-title">{{ item.title }}</h3>
              <p class="card-text">{{ item.content }}</p>
              <button class="btn btn-info">Xem chi tiết</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          {
            title: "8 loại rau củ quả giàu canxi",
            content:
              "Canxi là khoáng chất cần thiết đối với cơ thể người. Có 8 loại rau củ giàu canxi...",
            image: require('@/components/images/sesameoil_300x300.jpg'),
          },
          {
            title: "Các loại gia vị tốt cho sức khỏe",
            content:
              "Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao bảo vệ cơ thể...",
            image: require('@/components/images/orange_300x300.jpg'),
          },
          {
            title: "9 loại đậu bổ dưỡng nên dùng nhiều",
            content:
              "Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giúp giảm lượng đường trong máu...",
            image: require('@/components/images/spinach_300x300.jpg'),
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    font-family: Arial, sans-serif;
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
  }
  
  .card-text {
    font-size: 0.95rem;
    color: #555;
  }
  
  .btn-info {
    background-color: #17a2b8;
    color: white;
  }
  </style>
  