<template>
    <div id="detail">
        <h3>Mã nhân viên: <span class="font-bold">{{ currentEmployee.employee_number }}</span></h3>
        <h3>Họ và tên: <span class="font-bold">{{ currentEmployee.full_name }}</span></h3>
        <input type="number" v-model="qty" placeholder="1">
        <select name="" id="" v-model="type">
            <option v-for="type in listType" :value="type">{{ type }}</option>

        </select>
        <br>
        <button v-on:click="addQty()">Thêm</button>
    </div>
    <div class="chart">
        <Bar id="chart-qty" :options="chartOptions" :data="chartData" ref="chart" />
    </div>
</template>
<script>
/**
 * Vue.js code in here!
 */
// import Vue from 'vue'
import axios from 'axios'
// import component1 from 'component1'
// import component2 from 'component2'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    /***********************************************************************************************************
     ******************************* Pass data to child component **********************************************
        **********************************************************************************************************/
    props: ["currentEmployee"],
    components: { Bar },
    // components: {component1, component2},
    data() {
        /***********************************************************************************************************
         ******************************* Initialize global variables ***********************************************
            **********************************************************************************************************/
        return {
            qty: 1,
            type: "Phone",
            listType: ["Phone", "TV", "Bike", "Laptop", "PC"],
            // init variable of add data for type
            typeData: {
                "Phone": 0,
                "TV": 0,
                "Bike": 0,
                "Laptop": 0,
                "PC": 0
            },
            chartData: {
                labels: ["Phone", "TV", "Bike", "Laptop", "PC"],
                datasets: [{
                    label: 'Category Quantity',
                    backgroundColor: '#f87979',
                    data: [0, 0, 0, 0, 0]
                }]
            },
            chartOptions: {
                responsive: true
            },
            interValId: null,

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
      // dem nguoc moi 2 giay goi toi api de lay du lieu moi
            this.interValId = setInterval(() => {
            this.callAPI();
        }, 2000);
        
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
        addQty() {
            console.log(this.type);
            switch (this.type) {
                case "Phone":
                    this.typeData.Phone += this.qty;
                    break;
                case "TV":
                    this.typeData.TV += this.qty;
                    break;
                case "Bike":
                    this.typeData.Bike += this.qty;
                    break;
                case "Laptop":
                    this.typeData.Laptop += this.qty;
                    break;
                case "PC":
                    this.typeData.PC += this.qty;
                    break;
                default:
                    console.log("Invalid type");
                    return false;

            };
            // // //Append data to chart
            // this.chartData = {
            //     ...this.chartData,
            //     datasets: [{
            //         ...this.chartData.datasets[0],
            //         data: [
            //             this.typeData.Phone, this.typeData.TV, this.typeData.Bike, this.typeData.Laptop, this.typeData.PC
            //         ]
            //     }]
            // };
           // console.log(this.chartData.datasets[0].data);
        },


        /**
         * Call API sample
         */
        // async callAPI() {
        //     try {
        //         let typeData = [];

        //         const callAPI = await axios.get('http://localhost/unistreamapi/public/api/list-data', {
        //             /************ Attach param for request here ***************/
        //         }).then(function (response) {
        //             typeData = response.data;
        //             //console.log(response);
        //         }).catch(function (errors) {
        //             console.log(errors);
        //         });
        //         this.chartData = {
        //             ...this.chartData,
        //             datasets: [{
        //                 ...this.chartData.datasets[0],
        //                 data: typeData
                        
        //             }]  
        //         };
        //        // console.log(callAPI.data);
        //     } catch (err) {
        //         console.log(err);
        //     }
        // },
    },
}
</script>
<style scoped>
#detail {
    width: 300px;
    height: 300px;
}
</style>