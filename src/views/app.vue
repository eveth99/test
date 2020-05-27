<template>
    <div id="demo">

        <h1>app1</h1>
        <button v-on:click="clickme">btn1</button>
        <button v-on:click="clickme2('Welcome')">btn2</button>
        {{gettime()}}
    </div>
    
   
</template>

<script>
export default {
  name:"demo",
  method(){
      this.initial()
  },
  methods:{
        clickme(){
            alert('ok')
        },
        clickme2(e){
            alert(e)
        },gettime(){
            return Date()
        }
    }
}
</script>