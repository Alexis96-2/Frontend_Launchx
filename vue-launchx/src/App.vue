<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Administración</router-link>
  </nav>
  <router-view/>
</template>

<style>
body{
  margin: 0 auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto 0;
}

nav {
  padding: 30px;
}
nav img{
  width: 150px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
