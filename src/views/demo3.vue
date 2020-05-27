<template>
  <div id="demo3">
    <h1>Data</h1>
    <button @click="count++">Count</button>
    <span>{{count}}</span>
       <span>{{message}}</span>
       <input type="text" placeholder="กรุณากรอก" v-model="message">
  </div>
</template>

<script>
export default {
name:"Demo3",
    mounted(){
        this.message = "Welcome"
    }
    ,data(){
        return{
            count:0,
            message:""
        }
    }
}
</script>

<style>

</style>