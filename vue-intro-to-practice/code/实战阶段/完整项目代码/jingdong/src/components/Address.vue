<template>
  <div class="address">
    <div class="address__info">
      <div class="address__info__user">{{address.name}}</div>
      <div class="address__info__phone">{{address.phone}}</div>
    </div>
    <div class="address__detail">
      {{address.city}}{{address.department}}{{address.houseNumber}}
    </div>
    <div class="iconfont address__icon">&#xe6f2;</div>
  </div>
</template>

<script>
export default {
  name: 'Address',
  props: ['address']
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';
.address {
  position: relative;
  margin: .16rem .18rem 0 .18rem;
  padding: .18rem .64rem .18rem .16rem;
  background: #FFF;
  border-radius: .04rem;
  &__info {
    display: flex;
    line-height: .2rem;
    font-size: .14rem;
    color: $light-fontColor;
    &__user {
      width: .94rem;
    }
    &__phone {
      flex: 1;
    }
  }
  &__detail {
    margin-top: .08rem;
    line-height: .2rem;
    font-size: .14rem;
    color: $content-fontcolor;
  }
  &__icon {
    position: absolute;
    right: .2rem;
    top: .4rem;
    transform: rotate(180deg);
    font-size: .2rem;
    color: $light-fontColor;
  }
}
</style>