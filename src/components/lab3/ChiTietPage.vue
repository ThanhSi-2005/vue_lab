<template>
    <div class="container">
        <nav class="navbar navbar-expand-sm navbar-dark" style="background-color: aliceblue;">
            <div class="container">
                <a class="navbar-brand" href="../lab3/canhanpage">
                    <img src="../images/logo-energy-pilates.png" alt="" style="width: 150px;">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link" href=""><i class="fa-solid fa-list"></i> Bài viết</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa-solid fa-film"></i> Video</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa-solid fa-circle-info"></i> Giới thiệu</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa-solid fa-calendar-days"></i> Sự kiện</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                <i class="fa-solid fa-user"></i> Tài khoản
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                                <li><a class="dropdown-item" href="#">Quên mật khẩu</a></li>
                                <li><a class="dropdown-item" href="#">Đăng ký thành viên</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="navbar-nav d-flex">
                        <li class="nav-item">
                            <a class="nav-link">Tiếng Việt</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Tiếng Anh</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> <br>

        <div class="post-page">
            <div class="post-content">
            <!-- Tiêu đề bài viết -->
            <h1 class="post-title">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống</h1>

            <!-- Hình ảnh đầu tiên -->
            <img src="../images/tap-pilates1.jpg" alt="Pilates Exercise" class="post-image" />

            <!-- Nội dung đoạn văn bản -->
            <p>
                Tập Pilates có thể vẫn còn khá xa lạ với người Việt, nhưng tại các nước phương Tây thì đây chính là
                phương pháp tập thể dục giúp duy trì vóc dáng, tăng cường ý chí và cải thiện sự linh hoạt, dẻo dai cho
                người tập. Đặc biệt, các bài tập Pilates còn có khả năng trị đau lưng, là giải pháp hữu hiệu để phục hồi
                chấn thương cột sống. Sau đây hãy cùng tìm hiểu các phương pháp tập luyện này giúp phục hồi chấn thương cột
                sống nhé!
            </p>

            

            <h1 class="post-title">Pilates giúp phục hồi chấn thương cột sống nhanh chóng</h1>

            <!-- Hình ảnh thứ hai -->
            <img src="../images/tap-piltes.jpg" alt="Pilates Exercise 2" class="post-image" />

            <!-- Tiêu đề phụ và nội dung tiếp theo -->
            <h2>Phương pháp tập Pilates Cat Cow</h2>
            <p>
                Các bước thực hiện:
            </p>
            <ul>
                <li>Bắt đầu với tư thế 4 điểm. Vai và cổ tay bạn phải thẳng hàng và vuông góc với thảm , lưng bạn phải thẳng
                    và xương chậu của bạn phải cân đối.
                </li>
                <li>Hít vào, nâng cằm, căng ngực...</li>
                <li>Lặp lại động tác từ 5-7 lần...</li>
            </ul>

            <h3>Lời kết</h3>
            <p>
                Trên đây là phương pháp tập Pilates giúp phục hồi chấn thương cột sống nhanh chóng...
            </p>

            </div>

            <!-- Phần bình luận -->
            <div class="comments-section">
            <h3>Bình luận và viết tại đây</h3>
            <textarea v-model="newComment" placeholder="Nhập bình luận của bạn"></textarea>
            <button @click="addComment">Gửi bình luận</button>

            <h4>Danh sách các bình luận:</h4>
            <ul>
                <li v-for="comment in comments" :key="comment">{{ comment }}</li>
            </ul>
            </div>
        </div>

    </div>
  </template>
  
  <script>
  export default {
    name: "ChiTietPage",

    data() {
    return {
      newComment: "",
      comments: ["Bình An: Bài viết rất hữu ích", "Bình An: Cảm ơn những chia sẻ bổ ích"],
    };
  },
  methods: {
    addComment() {
      if (this.newComment) {
        this.comments.push(this.newComment);
        this.newComment = "";
      }
    },
  },
};

  </script>
  
  <style scoped>
  .post-page {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin: 20px;
  }
  
  .post-content {
    flex: 3;
  }
  
  .post-title {
    color: #00aaff;
    font-size: 2em;
    text-align: center;
  }
  
  .post-image {
    width: 100%;
    margin: 20px 0;
  }
  
  .comments-section {
    flex: 1;
    border-left: 2px solid #ddd;
    padding-left: 20px;
  }
  
  textarea {
    width: 100%;
    height: 80px;
    margin-bottom: 10px;
  }
  
  button {
    background-color: #28a745;
    color: white;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
  }
  </style>