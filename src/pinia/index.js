import { defineStore } from 'pinia'
import { hyyStore } from './hyy'


export const useStore = defineStore('storeId', {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      counter: 10,
      name: 'Eduardo',
      isAdmin: true,
    }
  },
  getters: {
    /**
     * 
     * @param {*} state 
     * @returns 
     */
    // 类型是自动推断的，因为我们没有使用 `this`
    doubleCount: (state) => state.counter * 2,
    // 这里需要我们自己添加类型（在 JS 中使用 JSDoc）。 我们还可以
    // 使用它来记录 getter
    /**
     * 返回计数器值乘以二加一。
     *
     * @returns {number}
     */
    doubleCountPlusOne() {
      // 自动完成 ✨
      return this.doubleCount + 1
    },

    // getUserById: (state) => {
    //   return (userId) => state.users.find((user) => user.id === userId)
    // },
  },
  actions: {
    /**
     * 
     * @param {*} value 
     */
    changeState(value) {
      console.log(value)
      this.name+=value

    },
    getList() {
      console.log(hyyStore().list)
      return hyyStore().list
    }
  }

})