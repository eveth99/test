<template>
  <div id="app"><h1>V-model</h1>

    <ul>
        <li><router-link to="/home">home</router-link></li>
        <li><router-link to="/app">app</router-link></li>
         <li><router-link to="/demo3">Demo</router-link></li>
    </ul>
    <router-view></router-view>
  
  </div>
</template>

<script>
export default {
  name:"home",

}
</script>
<style>
 ul{margin: 0;}
 li{display: inline;}
</style>