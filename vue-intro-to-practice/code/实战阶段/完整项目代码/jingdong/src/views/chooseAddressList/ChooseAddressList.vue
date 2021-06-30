<template>
  <div class="wrapper">
    <div class="title">
      <div
        class="iconfont title__icon"
        @click="handleBackClick"
      >&#xe6f2;</div>
      收货地址
    </div>
    <Address
      v-for="address in addressList"
      :key="address._id"
      :address="address"
      @click="() => handleAddressClick(address._id)"
    />
  </div>
</template>

<script>
import Address from '../../components/Address'
import useCommonAddressEffect from '../../effects/addressEffect'

import { toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'ChooseAddressList',
  components: { Address },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const shopId = route.params.shopId
    const { addressList } = toRefs(store.state)
    const { getAddressList } = useCommonAddressEffect()
    getAddressList()
    const handleBackClick = () => { router.back() }
    const handleAddressClick = (id) => {
      router.push(`/orderConfirmation/${shopId}/${id}`)
    }
    return { addressList, handleBackClick, handleAddressClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: $dark-bgColor;
}
.title {
  position: relative;
  line-height: .44rem;
  background: $bgColor;
  font-size: .16rem;
  color: $content-fontcolor;
  text-align: center;
  &__icon {
    position: absolute;
    left: .18rem;
    top: 0;
    font-size: .2rem;
  }
}
</style>