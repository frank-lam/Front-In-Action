import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    cartList: {
      // 第一层级是商铺的id
      // shopId: {
        // 第二层是商品id
        // 第二层内容是商品内容以及购物数量
      //   productId: {
      //     _id: '1',
      //     name: '番茄250g/份',
      //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
      //     sales: 10,
      //     price: 33.6,
      //     oldPrice: 39.6,
      //     count: 2
      //   },
      // },
    }
  },
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo } = payload
      let shopInfo = state.cartList[shopId]
      if(!shopInfo) { shopInfo = {} }
      let product = shopInfo[productId]
      if(!product) {
        product = productInfo
        product.count = 0
      }
      product.count = product.count + payload.num
      if(payload.num > 0) { product.check = true }
      if(product.count < 0) { product.count = 0 }
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
    },
    changeCartItemChecked(state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId][productId]
      product.check = !product.check
    }
  },
  actions: {
  },
  modules: {
  }
})
