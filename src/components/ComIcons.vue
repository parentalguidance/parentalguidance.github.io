<template>
  <div style="display: flex; justify-content: center">
    <a href="https://wa.me/+972504494951">
      <div class="wrapper" ref="https://wa.me/+972504494951">
      <i class="pi pi-whatsapp"></i>
    </div>
    </a>
    <a href="">
      <div class="wrapper">
        <i class="pi pi-facebook"></i>
      </div>
    </a>
    <a href="">
      <div class="wrapper">
        <i class="pi pi-instagram"></i>
      </div>
    </a>
    <a href="mailto:stephanieeival@gmail.com">
      <div class="wrapper">
        <i class="pi pi-envelope"></i>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "ComIcons",
  props: {
    icon: {
      type: String,
    }
  }
}
</script>

<style scoped>
a {
  text-decoration:none
}
i {
  font-size: 1.5rem;
  color:#FFFFFF
}
.wrapper{
  width: 55px;
  height: 55px;
  padding: 1rem;
  margin: 0 0.5rem 0 0.5rem;
  background-color: #2c3e50;
  border-radius: 50%;
  display: flex;
  justify-content: center;
}
</style>