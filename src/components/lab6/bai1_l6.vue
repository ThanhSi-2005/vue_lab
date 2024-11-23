<template>
    <div>
      <p v-if="score >= 9">Xếp loại: Xuất sắc</p>
      <p v-else-if="score >= 8">Xếp loại: Giỏi</p>
      <p v-else-if="score >= 6.5">Xếp loại: Khá</p>
      <p v-else-if="score >= 5">Xếp loại: Trung bình</p>
      <p v-else>Xếp loại: Yếu</p>
      <input type="number" v-model="score" placeholder="Nhập điểm số" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        score: 0, 
      };
    },
  };
  </script>
  