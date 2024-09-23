<template>
  <div class="content">
    <h3>자유게시판</h3>
    <b-form @submit.prevent="">
      <table class="free-register-form">
        <tr>
          <th>분류</th>
          <td>
            <CategoriesModule/>
          </td>
        </tr>
        <tr>
          <th>제목</th>
          <td><b-form-input type="text" placeholder="제목을 입력하세요"/></td>
        </tr>
        <tr>
          <th>내용</th>
          <td><b-textarea 
            rows="15"
            style="resize: none;"
            placeholder="내용을 입력하세요"/></td>
        </tr>
        <tr>
          <th>첨부</th>
          <td><p>jpg, gif, png, zip 파일만 파일사이즈 2MB까지 업로드 가능합니다.</p></td>
        </tr>
      </table>
    </b-form>
  </div>
</template>

<script setup lang="ts">
import CategoriesModule from '@/components/modules/CategoriseModule.vue';


</script>

<style>
  .free-register-form{
    width: 100%;
  }
  .free-register-form th{
    text-align: center;
  }
  .free-register-form td{
    padding: 10px 10px;
  }
 
</style>