import 'normalize.css'
import Vue from 'vue'
import App from '@/App'
import { resolve } from 'path';

new Vue({
    el: '#app',
    render: h => h(App)
})



function testPromise(X){
    return new Promise((resolve,reject)=>{
        if(X>10){
            resolve(X)
        }else{
            reject('reject')
        }
    })
}

testPromise(11)
.then(x=>console.log(x))
.catch(err=>console.log(err))