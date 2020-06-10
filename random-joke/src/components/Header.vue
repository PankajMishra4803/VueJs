<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <!-- <router-link class="navbar-brand" to="Home" >JokeApp</router-link> -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="Home" class="nav-link" >Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="RandomJoke" class="nav-link">RandomJoke</router-link>
      </li>
      <li class="nav-item">
        <router-link to="FavroiteJoke" class="nav-link">FavroiteJoke</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>
<style scoped>
 .router-link-active{
  opacity:1;
  border-bottom: 2px solid #fff;
  transition:all 0.25s;
  font-weight:bold
} 
</style>