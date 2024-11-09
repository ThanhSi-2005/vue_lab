<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
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

        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="../images/banner1.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <!-- <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p> -->
                </div>
                </div>
                <div class="carousel-item">
                <img src="../images/banner2.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <!-- <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p> -->
                </div>
                </div>
                <div class="carousel-item">
                <img src="../images/banner3.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <!-- <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p> -->
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>

        <section class="container my-5">
    <div class="row">
        <!-- Cột Chuyên mục và Bài viết nổi bật -->
        <div class="col-md-3">
            <!-- Chuyên mục -->
            <div class="mb-4">
                <h2 class="text-info mb-3">Chuyên mục</h2>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Chế độ tập
                        <span class="badge bg-primary rounded-pill">12</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Chế độ dinh dưỡng
                        <span class="badge bg-primary rounded-pill">15</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Cẩm nang cuộc sống
                        <span class="badge bg-primary rounded-pill">99</span>
                    </li>
                </ul>
            </div>

            <!-- Bài viết nổi bật -->
            <div>
                <h2 class="text-info mb-3">Bài viết nổi bật</h2>
                <ul class="list-unstyled">
                    <li class="mb-3 d-flex align-items-start">
                        <img src="../images/spinach_300x300.jpg" alt="Rau" class="me-2" style="width: 60px; height: 60px; object-fit: cover;">
                        <div>
                            <a href="#" class="text-decoration-none text-dark fw-bold">Lợi ích khi ăn rau mỗi ngày</a>
                            <p class="small">Tiêu thụ rau xanh hàng ngày sẽ giúp tăng cường thể lực, kiểm soát cân nặng...</p>
                        </div>
                    </li>
                    <li class="mb-3 d-flex align-items-start">
                        <img src="../images/orange_300x300.jpg" alt="Cam" class="me-2" style="width: 60px; height: 60px; object-fit: cover;">
                        <div>
                            <a href="#" class="text-decoration-none text-dark fw-bold">9 tác dụng tuyệt vời của quả cam</a>
                            <p class="small">Cam tự hào về khả năng chống lão hóa mạnh mẽ nhờ hàm lượng chất chống oxy hóa cao...</p>
                        </div>
                    </li>
                    <li class="mb-3 d-flex align-items-start">
                        <img src="../images/sesameoil_300x300.jpg" alt="Dầu dừa" class="me-2" style="width: 60px; height: 60px; object-fit: cover;">
                        <div>
                            <a href="#" class="text-decoration-none text-dark fw-bold">10 công dụng bất ngờ từ dầu dừa</a>
                            <p class="small">Dầu dừa như một loại kem dưỡng ẩm tự nhiên cho cơ thể...</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Cột Tất cả bài viết -->
        <div class="col-md-9">
            <h2 class="text-info mb-3">Tất cả bài viết</h2>
            <div class="row row-cols-1 row-cols-md-2 g-4">

                <div class="col">
                    <div class="card h-100">
                        <img src="../images/tap-piltes.jpg" class="card-img-top" alt="Pilates 1">
                        <div class="card-body">
                            <h4 class="card-title">
                                <a href="../lab3/chitietbaivietpage" class="text-decoration-none">
                                    Phương pháp tập Pilates giúp phục hồi chấn thương cột sống
                                </a>
                            </h4>
                            <p class="card-text">Ngoài việc giúp duy trì vóc dáng, các bài tập Pilates còn có khả năng trị đau lưng...</p>
                            <p class="small text-muted"><i class="bi bi-chat-dots"></i> 16</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                        <img src="../images/tap-pilates1.jpg" class="card-img-top" alt="Pilates 2">
                        <div class="card-body">
                            <h4 class="card-title">
                                <a href="../lab3/chitietbaivietpage" class="text-decoration-none">
                                    Đây là những gì 1 giờ Tập Pilates có thể làm cho cơ thể của bạn
                                </a>
                            </h4>
                            <p class="card-text">Được thiết kế để xây dựng cơ bắp săn chắc, khỏe mạnh hơn...</p>
                            <p class="small text-muted"><i class="bi bi-chat-dots"></i> 8</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                        <img src="../images/tim-mach.jpg" class="card-img-top" alt="Pilates 3">
                        <div class="card-body">
                            <h4 class="card-title">
                                <a href="../lab3/chitietbaivietpage" class="text-decoration-none">
                                    Tập Pilates có thể cải thiện sức khỏe tim mạch của bạn
                                </a>
                            </h4>
                            <p class="card-text">Bài viết này sẽ giúp bạn hiểu sâu hơn về tác động tích cực của các bài tập Pilates...</p>
                            <p class="small text-muted"><i class="bi bi-chat-dots"></i> 5</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                        <img src="../images/eat-clean.png" class="card-img-top" alt="Eat Clean">
                        <div class="card-body">
                            <h4 class="card-title">
                                <a href="/duong-dan-bai-viet" class="text-decoration-none">
                                    EAT CLEAN: Nên Và Không Nên Ăn Thực Phẩm Nào?
                                </a>
                            </h4>
                            <p class="card-text">Chúng ta luôn chú trọng vào các thực phẩm sạch và duy trì lối sống lành mạnh...</p>
                            <p class="small text-muted"><i class="bi bi-chat-dots"></i> 3</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Phân trang -->
            <nav aria-label="Page navigation example" class="mt-4">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">1</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                </ul>
            </nav>
        </div>
    </div>
    </section>


    </div>
  </template>
  
  <script>
  export default {
    name: "BaiVietPage",
  };
  </script>