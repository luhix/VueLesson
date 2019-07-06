import Vue from 'vue'  //引入 vue
import Vuex from 'vuex' //引入 vuex

// 使用 vuex
Vue.use(Vuex);

//创建 vuex 实例
const store = new Vuex.Store({
    state: {
        count: 1
    },
    getters: { //类似 vue 中的 computed
        getStateCount: function(state)
        {
            return state.count+5
        }
    },

    mutations: { 
        add(state) {  // 上面定义的state 对象
            state.count = state.count+6;
        },
        reduction(state) {
            state.count = state.count-1;
        }
    },

    actions: { // 注册actions 类似 vue里的methods
        addCount(context) {  // 接收一个与 store 实例 具有相同方法的属性 context 对象
            context.commit("add")
        },
        redCount(context) {
            context.commit("reduction")
        }
    }
})

export default store   //导出 store