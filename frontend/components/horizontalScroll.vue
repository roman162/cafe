<template>
  <div
    :class="isTouchScreen ? 'scroll__container--touch' : 'scroll__container'"
  >
    <slot></slot>
    <div
      v-if="isButtonLeft && isArrow"
      class="last-channels__button last-channels__button--left"
      :class="isMovies ? 'last-channels__button--collection' : ''"
      @click="ulList(ulScroll)"
    >
      <img
        class="last-channels__button-icon--left"
        src="/images/icons/chevron-left.svg"
      >
    </div>
    <span
      v-if="isButtonLeft && isArrow"
      class="gradient-left"
      :class="isMovies ? 'gradient-left--film' : ''"
    />
    <span
      v-if="isButtonRight && isArrow"
      class="gradient-right"
      :class="isMovies ? 'gradient-right--film' : ''"
    />
    <div
      v-if="isButtonRight && isArrow"
      class="last-channels__button"
      :class="isMovies ? 'last-channels__button--collection' : ''"
      @click="ulList(ulScroll * (-1))"
    >
      <img
        src="/images/icons/chevron-left.svg"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    containerName: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    isArrow: {
      type: Boolean,
      default: false
    },
    isScrolledChanged: {
      type: Boolean,
      default: false
    },
    isMovies: {
      type: Boolean,
      default: false
    },
    ulScroll: {
      type: Number,
      default: 384
    }
  },
  data () {
    return {
      listArr: null,
      container: null,
      isTouchScreen: false,
      clientX: 0,
      moveX: 0,
      leftX: 0,
      moveKey: null,
      listArrWidth: 0,
      listArrRight: 0,
      xCoords: 0,
      requestKey: 0,
      isButtonLeft: false,
      isButtonRight: false
    }
  },
  watch: {
    list () {
      this.requestKey = 0
      setTimeout(() => {
        this.getListWidth()
      }, 500)
    },
    leftX () {
      this.watchArrow()
    }
  },
  mounted () {
    this.getListWidth()
    setTimeout(() => {
      this.scrolledToActiveItem()
    }, 900)
    setTimeout(() => {
      window.addEventListener('resize', this.getListWidth)
    }, 300)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.getListWidth)
  },
  methods: {
    scrolledToActiveItem () {
      const itemActive = this.listArr.querySelector('.item-active')
      if (itemActive) {
        const width = this.listArrWidth - this.listArrRight
        const left = itemActive.getBoundingClientRect().left - this.container.getBoundingClientRect().left
        this.leftX = this.leftX + (left - width / 2) * (-1)
        if (this.leftX > 0) {
          this.leftX = 0
        }
        if (this.isTouchScreen) {
          this.container.scrollLeft = this.leftX * (-1)
        } else {
          this.listArr.classList.add('animation-left')
          this.listArr.style.left = this.leftX + 'px'
          setTimeout(() => {
            this.listArr.classList.remove('animation-left')
          }, 400)
        }
      }
    },
    getListWidth () {
      setTimeout(() => {
        this.listArr = document.querySelector(`.${this.containerName}`)
        if (this.listArr) {
          this.listArr.style.left = '0px'
          this.listArr.addEventListener('mouseup', this.upElements)
          this.container = this.listArr.parentElement
          if (window.ontouchstart !== undefined) {
            this.isTouchScreen = true
          }
          this.listArr.removeEventListener('mousedown', this.downElements)
          this.listArrWidth = this.listArr.getBoundingClientRect().width
          this.listArrRight = this.listArr.getBoundingClientRect().width - this.container.getBoundingClientRect().width
          this.watchArrow()
        }
        if (this.listArrWidth === 0 && this.requestKey < 10) {
          this.requestKey++
          this.getListWidth()
        } else if (this.listArrRight > 0) {
          this.listArr.addEventListener('mousedown', this.downElements)
        }
        this.ulList(0)
      }, 300)
    },
    watchArrow () {
      if (this.isArrow) {
        if (this.leftX < 0) {
          this.isButtonLeft = true
        } else {
          this.isButtonLeft = false
        }
        if (this.listArrRight > 0 && (-1) * this.leftX < this.listArrRight) {
          this.isButtonRight = true
        } else {
          this.isButtonRight = false
        }
      }
    },
    ulList (value) {
      if (this.listArr) {
        this.listArrRight = this.listArr.getBoundingClientRect().width - this.container.getBoundingClientRect().width
        this.leftX += value
        if ((-1) * this.leftX >= this.listArrRight) {
          this.leftX = (-1) * this.listArrRight - 40
        }
        if (this.leftX > 0) {
          this.leftX = 0
        }
        if (value) {
          this.listArr.classList.add('animation-left')
          this.listArr.style.left = this.leftX + 'px'
          setTimeout(() => {
            this.listArr.classList.remove('animation-left')
          }, 400)
        }
      }
    },
    downElements () {
      event.preventDefault()
      this.moveX = event.clientX - this.leftX
      this.clientX = event.clientX
      this.listArrRight = this.listArrWidth - this.container.getBoundingClientRect().width
      document.addEventListener('mousemove', this.moveElement)
      document.addEventListener('mouseup', this.removeEvent)
    },
    upElements () {
      event.preventDefault()
      if (this.listArrRight <= 0) {
        const index = event.target.closest('li')?.dataset.index
        if (index || index === 0) {
          this.changeActiveItem(index)
        }
      } else {
        const move = this.clientX - event.clientX
        if (move < 5 && move > -5) {
          const index = event.target.closest('li')?.dataset.index
          if (index || index === 0) {
            this.changeActiveItem(index)
          }
        }
      }
    },
    moveElement (event) {
      event.preventDefault()
      if (!this.moveKey) {
        this.moveKey = setTimeout(() => {
          this.moveKey = null
          this.leftX = (event.pageX - this.moveX) < 0 ? ((event.pageX - this.moveX) < (-1) * this.listArrRight ? (-1) * this.listArrRight : event.pageX - this.moveX) : 0
        }, 5)
      }
      this.listArr.style.left = this.leftX + 'px'
    },
    removeEvent () {
      document.removeEventListener('mousemove', this.moveElement)
      document.removeEventListener('mouseup', this.removeEvent)
    },
    changeActiveItem (index) {
      console.log(index)
      this.$emit('changeItem', index, event)
      if (this.isScrolledChanged) {
        setTimeout(() => {
          this.scrolledToActiveItem()
        }, 1000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .scroll__container{
    width: auto;
    overflow: hidden;
    position: relative;

    &--touch{
      overflow: scroll;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        width: 0;
        height: 0;
      }

      & .last-channels__button{
        display: none;
      }

      & .gradient-left{
        display: none;
      }

      .gradient-right{
        display: none;
      }
    }
  }

  .animation-left{
    transition-property: left;
    transition-duration: .3s;
    transition-timing-function: ease-in;
  }

  .gradient-left{
    height: 100%;
    width: 170px;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
    z-index: 5;

    @media screen and (max-width: 768px) {
      display: none;
    }

    &--film{
      width: 22px;
      background: #fff;
    }
  }

  .gradient-right{
    height: 100%;
    width: 170px;
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
    z-index: 5;

    @media screen and (max-width: 768px) {
      display: none;
    }

    &--film{
      width: 22px;
      background: #fff;
    }
  }

  .last-channels__button{
    background-color: #fff;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    right: 1px;
    top: calc( 50% - 22px );
    position: absolute;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;

    @media screen and (max-width: 768px){
      display: none;
    }

    &--collection{
      top: 142px;

      @media screen and (max-width: 768px) {
        top: 106px;
      }
    }

    &--left{
      left: 1px;
    }
  }

  .last-channels__button-icon{
    &--left{
      transform: scale(-1)
    }
  }
</style>
