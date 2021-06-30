<template>
  <div class="wrapper">
    <div class="title">
      <div
        class="iconfont title__back"
        @click="handleBackClick"
      >&#xe6f2;</div>
      <div class="title__text">管理收货地址</div>
      <div class="title__add" @click="handleAddClick">新建</div>
    </div>
    <Address
      v-for="address in addressList"
      :key="address._id"
      :address="address"
      @click="() => handleUpdateClick(address._id)"
    />
  </div>
</template>

<script>
import Address from '../../components/Address'
import useCommonAddressEffect from '../../effects/addressEffect'

import { toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'MyAddressList',
  components: { Address },
  setup() {
    const store = useStore()
    const router = useRouter()
    const { addressList } = toRefs(store.state)
    const { getAddressList } = useCommonAddressEffect()
    getAddressList(true)
    const handleBackClick = () => { router.back() }
    const handleAddClick = () => { router.push({ name: 'UpsertAddress'}) }
    const handleUpdateClick = (addressId)=> {router.push(`/upsertAddress/${addressId}`)}
    return { addressList, handleBackClick, handleAddClick, handleUpdateClick }
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
  display: flex;
  line-height: .44rem;
  background: $bgColor;
  font-size: .16rem;
  color: $content-fontcolor;
  text-align: center;
  &__back {
    width: .2rem;
    margin-left: .18rem;
    font-size: .2rem;
    color: #B6B6B6;
  }
  &__text {
    flex: 1;
    text-align: center;
  }
  &__add {
    margin-right: .2rem;
    font-size: .14rem;
  }
}
</style>