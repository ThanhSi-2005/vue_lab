<template>
    <div class="container mt-5">
  <!-- Nút mở Modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#accountModal">
    Tài khoản
  </button>

  <!-- Modal -->
  <div class="modal fade" id="accountModal" tabindex="-1" aria-labelledby="accountModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="accountModalLabel">Tài khoản</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Tab chứa Form Đăng ký và Đăng nhập -->
          <ul class="nav nav-tabs" id="modalTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="modal-register-tab" data-bs-toggle="tab" data-bs-target="#modal-register" type="button" role="tab" aria-controls="modal-register" aria-selected="true">Đăng ký</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="modal-login-tab" data-bs-toggle="tab" data-bs-target="#modal-login" type="button" role="tab" aria-controls="modal-login" aria-selected="false">Đăng nhập</button>
            </li>
          </ul>
          <div class="tab-content" id="modalTabContent">
            <div class="tab-pane fade show active" id="modal-register" role="tabpanel" aria-labelledby="modal-register-tab">
              <!-- Form Đăng ký -->
              <div class="mt-3">
                <!-- Nội dung Form Đăng ký từ bài 2 -->
                 <!-- Đăng ký Thông tin -->
                    <div class="col-md-6">
                    <h2>Đăng ký thông tin</h2>
                    <form class="was-validated">
                        <div class="mb-3">
                        <label for="fullname" class="form-label">Họ và Tên:</label>
                        <input type="text" class="form-control" id="fullname" placeholder="Nhập họ và tên" required>
                        <div class="invalid-feedback">Vui lòng điền vào trường này</div>
                        </div>
                        <div class="mb-3">
                        <label for="email" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="Nhập email" required>
                        <div class="invalid-feedback">Vui lòng nhập email hợp lệ</div>
                        </div>

                        <div class="mb-3">
                        <label for="phone" class="form-label">Số điện thoại:</label>
                        <input type="tel" class="form-control" id="phone" placeholder="Nhập số điện thoại" required>
                        <div class="invalid-feedback">Vui lòng nhập số điện thoại hợp lệ</div>
                        </div>

                        <div class="mb-3">
                        <label for="password" class="form-label">Mật khẩu:</label>
                        <input type="password" class="form-control" id="password" placeholder="Nhập mật khẩu" required>
                        <div class="invalid-feedback">Vui lòng nhập mật khẩu</div>
                        </div>

                        <div class="mb-3">
                            <label for="confirm-password" class="form-label">Xác nhận mật khẩu:</label>
                            <input type="password" class="form-control" id="confirm-password" placeholder="Nhập lại mật khẩu" required>
                            <div class="invalid-feedback">Vui lòng xác nhận mật khẩu</div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Giới tính:</label>
                            <div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="male" value="male" required>
                                <label class="form-check-label" for="male">Nam</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="gender" id="female" value="female">
                                <label class="form-check-label" for="female">Nữ</label>
                            </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="language" class="form-label">Ngôn ngữ:</label>
                            <select class="form-select" id="language" required>
                            <option selected disabled value="">Chọn ngôn ngữ</option>
                            <option value="vietnamese">Tiếng Việt</option>
                            <option value="english">Tiếng Anh</option>
                            </select>
                            <div class="invalid-feedback">Vui lòng chọn một ngôn ngữ</div>
                        </div>
                        
                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" id="terms" required>
                            <label class="form-check-label" for="terms">Đồng ý với các điều khoản</label>
                            <div class="invalid-feedback">Vui lòng đồng ý với điều khoản</div>
                        </div>

                        <button type="submit" class="btn btn-primary">Đăng ký</button>
                    </form>
                    </div>
              </div>
            </div>
            <div class="tab-pane fade" id="modal-login" role="tabpanel" aria-labelledby="modal-login-tab">
              <!-- Form Đăng nhập -->
              <div class="mt-3">
                <!-- Nội dung Form Đăng nhập từ bài 2 -->
                <div class="col-md-6">
                        <h2>Đăng nhập</h2>
                        <form class="was-validated">
                            <div class="mb-3">
                            <label for="login-email" class="form-label">Email:</label>
                            <input type="email" class="form-control" id="login-email" placeholder="Nhập email" required>
                            <div class="invalid-feedback">Vui lòng nhập email hợp lệ</div>
                            </div>
                            <div class="mb-3">
                            <label for="login-password" class="form-label">Mật khẩu:</label>
                            <input type="password" class="form-control" id="login-password" placeholder="Nhập mật khẩu" required>
                            <div class="invalid-feedback">Vui lòng nhập mật khẩu</div>
                            </div>
                            <button type="submit" class="btn btn-primary">Đăng nhập</button>
                        </form>
                        </div>
                    </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
        </div>
      </div>
    </div>
  <!-- </div>
</div> -->



</template>

<script>
    export default {
        name: 'FormPage'
    };
</script>