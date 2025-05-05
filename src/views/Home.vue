
<template>
  <div>
    <h2>Home</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { message: "" }
  },
  mounted() {
    fetch("https://ongapp-api.onrender.com")
      .then(res => res.text())
      .then(data => this.message = data)
  }
}
</script>
