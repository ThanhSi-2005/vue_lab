<template>
   <div class="container mt-5">
  <h3 class="text-center text-danger">Bảng Thành Phần Dinh Dưỡng</h3>
  <table class="table table-bordered mt-0">
    <thead>
        
      <tr>
        <th rowspan="2">Thành Phần</th>
        <th colspan="2">Giá Trị</th>
      </tr>
      <tr>
        <th>Khối Lượng</th>
        <th>% DV*</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Calories</th>
        <td>200 kcal</td>
        <td>20%</td>
      </tr>
      <tr>
        <th>Chất Béo</th>
        <td>9 g</td>
        <td>14%</td>
      </tr>
      <tr>
        <th>Chất Béo Bão Hòa</th>
        <td>4 g</td>
        <td>20%</td>
      </tr>
      <tr>
        <th>Chất Đạm</th>
        <td>8 g</td>
        <td>16%</td>
      </tr>
      <tr>
        <th>Chất Xơ</th>
        <td>5 g</td>
        <td>20%</td>
      </tr>
      <tr>
        <th>Đường</th>
        <td>12 g</td>
        <td>-</td>
      </tr>
      <tr>
        <th rowspan="2">Vitamin</th>
        <td>Vitamin C</td>
        <td>25%</td>
      </tr>
      <tr>
        <td>Vitamin D</td>
        <td>10%</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
    name: 'TableThanhPhan'
}
</script>

<style>
    .table thead th {
      background-color: #ffc107;
      color: black;
      text-align: center;
    }

    .table-title {
      background-color: #ffc107;
      color: #dc3545;
      font-weight: bold;
      text-align: center;
      padding: 10px;
      font-size: 1.5rem;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    
</style>