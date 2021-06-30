<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check__icon__img"
        />
        <div class="check__icon__tag">{{total}}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; {{price}}</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

// 获取购物车信息逻辑
const useCartEffect = () => {
    const store = useStore()
    const route = useRoute()
    const shopId = route.params.id
    const cartList = store.state.cartList

    const total = computed(() => {
      const productList = cartList[shopId]
      let count = 0
      if(productList) {
         for(let i in productList) {
           const product = productList[i]
           count += product.count
        }
      }
      return count
    })

    const price = computed(() => {
      const productList = cartList[shopId]
      let count = 0
      if(productList) {
         for(let i in productList) {
           const product = productList[i]
           count += (product.count * product.price)
        }
      }
      return count.toFixed(2)
    })
    return { total, price}
}
export default {
  name: 'Cart',
  setup() {
    const { total, price } = useCartEffect()
    return { total, price }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.check {
  display: flex;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  line-height: .49rem;
  &__icon {
    position: relative;
    width: .84rem;
    &__img {
      display: block;
      margin: .12rem auto;
      width: .28rem;
      height: .26rem;
    }
    &__tag {
      position: absolute;
      left: .46rem;
      top: .04rem;
      padding: 0 .04rem;
      min-width: .2rem;
      height: .2rem;
      line-height: .2rem;
      background-color: $hightlight-fontColor;
      border-radius: .1rem;
      font-size: .12rem;
      text-align: center;
      color: #fff;
      transform: scale(.5);
      transform-origin: left center;
    }
  }
  &__info {
    flex: 1;
    color: $content-fontcolor;
    font-size: .12rem;
    &__price {
      line-height: .49rem;
      color: $hightlight-fontColor;
      font-size: .18rem;
    }
  }
  &__btn {
    width: .98rem;
    background-color: #4FB0F9;
    text-align: center;
    color: #FFF;
    font-size: .14rem;
  }
}
</style>