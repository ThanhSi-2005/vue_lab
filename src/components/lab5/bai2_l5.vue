<template>
    <div>
        <input v-model="userInput" placeholder="Nhập vào đây"/>
        <p>Giá trị bạn nhập : {{ userInput }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const userInput = ref('FPL');

</script>