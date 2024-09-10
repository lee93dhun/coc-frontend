<template>
  <div class="header">
    <div class="header-logo">
      <h3>Comunity of Comunity</h3>
    </div>
    <div class="header-navbar">
      <ul>
        <li>공지사항</li>
        <li>자유 게시판</li>
        <li>갤러리</li>
        <li>문의 게시판</li>
      </ul>
      <div class="header-account">
        <a href="#">로그인/회원가입</a>
      </div>
    </div>
  </div>
</template>

<style>
  .header{
    border-bottom: 1px solid #000;
    margin-bottom: 10px;
  }
  .header-navbar{
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;
  }
  .header-logo{
    height: 50px;
    padding: 10px 10px;
  }
  .header-navbar li{
    display: inline;
    padding: 3px 10px;
  }

</style>