import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    // { shopId: {shopName:'', productList:{ productId: {} }}}
    cartList: {}
  },
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo } = payload
      let shopInfo = state.cartList[shopId] || {
        shopName: '', productList:{}
      }
      let product = shopInfo.productList[productId]
      if(!product) {
        productInfo.count = 0
        product = productInfo
      }
      product.count = product.count + payload.num
      if(payload.num > 0) { product.check = true }
      if(product.count < 0) { product.count = 0 }
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
    },
    changeShopName(state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '', productList:{}
      }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
    },
    changeCartItemChecked(state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId].productList[productId]
      product.check = !product.check
    },
    cleanCartProducts(state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
    },
    setCartItemsChecked(state, payload) {
      const { shopId } = payload
      const products = state.cartList[shopId].productList
      if(products) {
        for(let key in products) {
          const product = products[key]
          product.check = true
        }
      }
    }
  }
})
