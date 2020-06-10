<template>
    <div>
        <div>
      <h1>Favorite Joke</h1>
      <!----------------------------Looping Random list and bind with checkbox----------------------------------------->
      <p v-if="favoriteJokesStorage.length == 0">Go in Random joke and add some joke in your favoriteJoke</p>
        <div class="list-group checkbox-list-group" v-for="(favoriteJoke, i) in favoriteJokesStorage" v-bind:key="i">
            <div class="list-group-item">
            <p><span>{{favoriteJoke}}</span>
              <span class="tag-remove" v-on:click="removeJoke(favoriteJoke)">&nbsp;<i class="fa fa-trash" aria-hidden="true"></i></span></p>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:'FavoriteJoke',
     data() {
    return {
      msg: "Favorite Joke App",
      favoriteJokesStorage:[],
    }
  },
  mounted(){
      this.favoriteJokesStorage =JSON.parse(localStorage.getItem('favoriteJoke'));
      console.log(this.favoriteJokesStorage)
  },
  methods:{
    removeJoke: function(removeJoke){
     this.favoriteJokesStorage.splice(this.favoriteJokesStorage.indexOf(removeJoke), 1);
    }
  }

}
</script>