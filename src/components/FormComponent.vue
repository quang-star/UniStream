<template>

    <div id="form-add-new">
        <input type="text" v-model="employeeNumber" placeholder="Mã nhân viên">
        <input type="text" v-model="fullName" placeholder="Họ và tên">
        <button v-on:click="add()">Thêm</button>

         <div id="table">
        <table>
            <thead>
                <tr>
                    <th>Mã nhân viên</th>
                    <th>Họ tên</th>
                    <th>Chi tiết</th>
                </tr>
            </thead>

            <tbody v-if="this.listEmployeee.length > 0">
                <tr v-for="employee in listEmployeee">
                    <td>{{ employee.employee_number }}</td>
                    <td>{{ employee.full_name }}</td>
                    <td><button v-on:click="detail(employee.employee_number)">Chi tiết</button></td>
                </tr>
            </tbody>
        </table>
    </div>
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
            employeeNumber: "",
            fullName: "",
            listEmployeee: []
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
        add() {
            // gán dữ liệu vào list
            let count = 0;
            for (let i = 0; i < this.listEmployeee.length; i++) {
                if (this.employeeNumber == this.listEmployeee[i].employee_number) {
                    alert("Mã nhân viên không được trùng");
                    count++;
                    break;
                }
            }
            if (count == 0) {
                this.listEmployeee.push({
                    "employee_number": this.employeeNumber,
                    "full_name": this.fullName
                })
            }


            this.employeeNumber = "";
            this.fullName = "";


        },
        detail(employeeNumber){
            // truyen du lieu len component cha
            let currentEmployee = null;
            for(let i = 0; i < this.listEmployeee.length; i++){
                if(employeeNumber == this.listEmployeee[i].employee_number){ 
                    currentEmployee = this.listEmployeee[i];
                }
            }
            this.$emit("detail", currentEmployee);
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
#form-add-new {
    width: 400px;
    height: 300px;
    border: 1px solid black;
    overflow: auto;
}
</style>
