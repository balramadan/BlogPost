<template>
  <div class="pt-20 bg-primary min-h-screen h-full">
    <h2 class="text-light text-center mt-5">Login</h2>
    <form @submit.prevent="handleLogin" class="flex flex-col justify-center items-center">
      <div class="flex flex-col gap-5 mt-5">
        <label class="text-light" for="email">Email:</label>
        <input
          class="w-123 px-2 py-2 rounded"
          placeholder="Your email"
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div class="flex flex-col gap-5 mt-5">
        <label class="text-light" for="password">Password:</label>
        <input
          class="w-123 px-2 py-2 rounded"
          placeholder="Your password"
          type="password"
          name="password"
          id="password"
        />
      </div>
      <input
        class="flex justify-center mx-auto mt-10 px-5 py-2.5 w-123 cursor-pointer"
        type="submit"
        value="Login"
      />
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';

const handleLogin = async () => {
  await axios.post('/api/admin', {
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
  }).then((res) => {
    console.log(res.data)
    if (res.data.statusCode === 200) {
      alert('Login success');
      console.log(res)
      loginStore().login()
    } else {
      alert('Login failed');
      console.log(res)
    }
  });
}

useSeoMeta({
  title: "Login Admin | Blobal",
  description: "This is the login page",
  image: "https://example.com/image.jpg",
  url: "https://example.com",
  type: "website",
  site_name: "Blobal",
  twitter: {
    card: "summary_large_image",
    site: "@example",
    creator: "@example",
  },
  og: {
    title: "Login Admin",
    description: "This is the login page",
    image: "https://example.com/image.jpg",
    url: "https://example.com",
    type: "website",
    site_name: "Example",
  },
});
</script>

<style></style>
