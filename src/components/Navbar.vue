<template>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <!-- <a class="navbar-brand" href="#">Navbar</a> -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/blog">Blog</a></li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a></li>
        <li class="nav-item">
          <a class="nav-link" href="/form">LAB2_bai2,3,4</a></li>
        <li class="nav-item">
          <a class="nav-link" href="/lab2_b1">LAB2_bai1</a></li>

          <li class="nav-item">
            <a class="nav-link" href="/lab3/canhanpage">Trang cá nhân</a></li>
          
          <li class="nav-item">
            <a class="nav-link" href="/lab6/bai1">Bài1_l6</a></li>
          
          <li class="nav-item">
            <a class="nav-link" href="/lab6/bai2">Bài2_l6</a></li>

          <li class="nav-item">
            <a class="nav-link" href="/lab6/bai3">Bài3_l6</a></li>
          
            <li class="nav-item">
              <a class="nav-link" href="/lab6/bai4">Bài4_l6</a></li>


            <li class="nav-item">
              <a class="nav-link" href="/lab5/bai1">Bài1_l5</a></li>     
              
            <li class="nav-item">
              <a class="nav-link" href="/lab5/bai2">Bài2_l5</a></li>    

            <li class="nav-item">
              <a class="nav-link" href="/lab5/bai3">Bài3_l5</a></li> 

            <li class="nav-item">
              <a class="nav-link" href="/lab5/bai4">Bài4_l5</a></li> 

        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
export default {
 name: 'NavBar'
}
</script>

<style scoped>

</style>