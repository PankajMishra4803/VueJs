<template>
  <div>
    
    <div :class="favoriteJokes.length > 0 ? 'randon-list-fav': 'random-list'">
      <h1>Random Jokes</h1>
      <!----------------------------Looping Random list and bind with checkbox----------------------------------------->
        <div class="list-group checkbox-list-group" v-for="joke in jokeData" v-bind:key="joke.id">
            <div class="list-group-item">
            <label><span class="list-group-item-text"><i class="fa fa-fw"></i> {{joke.joke}}</span>&nbsp;<input type="checkbox" :id="joke.id" :value="joke.joke" v-model="favoriteJokes"></label></div>
        </div>
    </div>
     <!-- <p v-bind:class="favoriteJokes.length > 0 ? 'verLine': ''"></p>
     <div v-if="favoriteJokes.length > 0" v-bind:class="favoriteJokes.length > 0 ? 'joke-fav-list': ''">
      <h1>Favorite Jokes</h1>
       <ul v-for="(favoriteJoke, i) in favoriteJokes" v-bind:key="i">
         <li>
           <p><span>{{favoriteJoke}}</span>
              <span class="tag-remove" v-on:click="removeJoke(favoriteJoke)">&nbsp;<i class="fa fa-trash" aria-hidden="true"></i></span></p>
         </li>
         
      </ul>
     </div> -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "RandomJoke",
  data() {
    return {
      msg: "Jokes App",
      jokeData: [],
      favoriteJokes:[],
      favoriteJokesStorage:[],
      oldLocalVal:[]
    };
  },
   watch: {
    favoriteJokes: function (newJoke) {
      this.savefavoriteJoke(newJoke);
    }
  },
  mounted() {
    axios
      .get("https://api.icndb.com/jokes/random/10")
      .then(response => (this.jokeData = response.data.value)); 
  },
  methods:{
    savefavoriteJoke: function(newFavorite){
      this.oldLocalVal = newFavorite;
      localStorage.setItem('favoriteJoke',JSON.stringify(this.oldLocalVal))
    }
  }
};
</script>
<style scoped>
.tag-remove{
  cursor: pointer;
}
</style>