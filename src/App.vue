<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
// import DemoComponent from './components/DemoComponent.vue'
// import ChildComponent from './components/ChildComponent.vue'
// import FormComponent from './components/FormComponent.vue'
// import DetailComponent from './components/DetailComponent.vue'
// import LoginComponent from './components/LoginComponent.vue'
</script>

<template>
  <!-- <div id="main" style="display: flex;">
    <FormComponent @detail="handleDetailEmployee"/>
    <DetailComponent v-if="employeeNumberCurrent" :currentEmployee="employeeNumberCurrent"/>
    
  </div> -->
  <!-- <LoginComponent /> -->
  <nav>
   <!-- <RouterLink to="/">Go to home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink> -->

  </nav>
  <RouterView />
</template>
<script>
/**
 * Vue.js code in here!
 */
// import Vue from 'vue'
import axios from 'axios'
// import component1 from 'component1'
// import component2 from 'component2'


export default {
    /***********************************************************************************************************
     ******************************* Pass data to child component **********************************************
        **********************************************************************************************************/
    // prop: [variable1, variable2],
    // components: {component1, component2},
    data() {
        /***********************************************************************************************************
         ******************************* Initialize global variables ***********************************************
            **********************************************************************************************************/
        return {
          
            employeeNumberCurrent: null,
        }
    },
    created() {
        /***********************************************************************************************************
         *********************** Initialize data when this component is used. **************************************
            **********************************************************************************************************/
      
        
    },
    mounted() {
        /***********************************************************************************************************
         ******************** Once created, the interface is displayed and calls mounted. **************************
            **********************************************************************************************************/
        
    },
    watch: {
        /***********************************************************************************************************
         ********************************* Methods change value for a variable *************************************
            **********************************************************************************************************/
       
      
    },
    computed: {
        
    },
    methods: {
        /***********************************************************************************************************
         ******************************* Default functions that handle local data **********************************
            **********************************************************************************************************/


        /**
         * Example default function not using param
         */
        defaultFunction() {
            this.msg = "Replace message here!";
        },
        handleDetailEmployee(employee){
          this.employeeNumberCurrent = employee;
          console.log("employeeee:", this.employeeNumberCurrent);
        },
        

        /**
         * Call API sample
         */
        async callAPI() {
            try {
                const callAPI = await axios.get('/apiendpoint', {
                    /************ Attach param for request here ***************/
                }).then(function (response) {
                    console.log(response);
                }).catch(function (errors) {
                    console.log(errors);
                });
                console.log(callAPI.data);
            } catch (err) {
                console.log(err);
            }
        },
    },
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
#main{
  width: 700px;
  height: 700px;
  border: 1px solid black;
  margin: 0 auto;
}
</style>
