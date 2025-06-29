<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card-body">
                <h1>{{ msg }}</h1>
                <button v-on:click="plusData()">{{ count }}</button>
                <!-- Mỗi lần click sẽ bình phương giá trị count -->
                <h2>x^2=: {{ count2 }}</h2>
                <!-- Nhập vào 1 số và hiển thị số đó có phải số nguyên tố không-->
                <!-- để truyền dữ liệu vào thẻ input sử dụng v-model -->
                <input type="number" value="0" v-model="a" />
                <!-- Điều kiện hiển thị dữ liệu -->
                <p v-if="!checkSNT">số {{ a }} không phải là số nguyên tố</p>
                <p v-else>số {{ a }} là số nguyên tố</p>
                <!-- Hiển thị danh sách các số nguyên tố từ 1 tối a -->
                <p>Các số nguyên tố từ 1 tới {{ a }} là: </p>
                <!-- hiển thị danh sách dang mang hoặc obj-->
                <span v-for="(_snt, index) in listSNT" :key="index">
                    {{ _snt }}<span v-if="index < listSNT.length - 1">, </span>
                </span>

            </div>
        </div>
    </div>
</template>

<script>
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
            msg: '',
            count: 0,
            count2: 0,  // Biến này sẽ lưu giá trị bình phương của count
            a: 0,
            checkSNT: false,
            listSNT: []

        }
    },
    created() {
        /***********************************************************************************************************
         *********************** Initialize data when this component is used. **************************************
         **********************************************************************************************************/
        console.log('Init created component and call to function get data from api server.');
        this.msg = "Click vào button để tăng giá trị";
        // có thể gọi tới các hàm khác trong methods
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
        msg() {
            console.log("When the value of the msg variable changes, this method will be executed.");
        },
        // khi một biến có sự thay đổi thì ham ở đây sẽ được thực thi
        count() {
            this.count2 = this.count * this.count; // Cập nhật giá trị bình phương của count
        },
        a() {
            if (this.a < 2) {
                this.checkSNT = false;

            } else {
                this.checkSNT = true; // Giả sử a là số nguyên tố
                for (let i = 2; i <= Math.sqrt(this.a); i++) {
                    if (this.a % i === 0) {
                        this.checkSNT = false;
                        // return;
                    }
                }
            }
            this.listSNT = []; // Reset danh sách số nguyên tố
            for (let i = 2; i <= this.a; i++) {
                let isSNT = true;
                for (let j = 2; j <= Math.sqrt(i); j++) {
                    if (i % j === 0) {
                        isSNT = false;
                        break;
                    }
                }
                if (isSNT) {
                    this.listSNT.push(i); // Thêm số nguyên tố vào danh sách
                }
            }
            console.log(this.listSNT)
        },

        // checkSNT() {
        //     if(this.checkSNT) {
        //         console.log(`Số ${this.a} là số nguyên tố`);
        //     } else {
        //         console.log(`Số ${this.a} không phải là số nguyên tố`);
        //     }
        // }

    },
    computed: {
        appendMsg() {
            return msg + "Process the value and assign the value to the corresponding variable the var has changed.";
        }
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

        /**
         * Example default function using param 
         *
         * @param int pageNum number of page
         * @return boolean
         */
        defaultFunctionUsingParam(pageNum) {
            console.log(pageNum);
            return false;
        },
        /**
         * Method add +1 to data
         */
        plusData() {
            this.count += 1; // Tăng giá trị count lên 1
            //  this.count2 = this.count * this.count; // Cập nhật giá trị bình phương của count
        },


        /***********************************************************************************************************
         ******* Async and await functions for manipulating server-side data through internal API protocols ********
         **********************************************************************************************************/

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

<style lang="scss" scoped>
/**
* Custom local style css
*/
</style>
