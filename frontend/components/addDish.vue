<template>
  <div class="dish__container">
    <div class="dish__title">
      Новое блюдо
    </div>
    <div class="modal__date">
      <HorizontalScroll
        :containerName="'modal__date-list'"
        :isScrolledChanged="true"
        @changeItem="changeCategory"
      >
        <ul
          class="modal__date-list"
        >
          <li
            v-for="(category,index) in categories"
            :key="index"
            :data-index="index"
            class="modal__date-item"
            :class="{
              'modal__date-item--active': category.title === activeCategory.title
            }"
          >
            <span>
              {{ category.title }}
            </span>
          </li>
        </ul>
      </HorizontalScroll>
    </div>
    <div class="input__container">
      <span
        class="input__title"
      >
        Название
      </span>
      <input
        type="text"
        class="input__input"
        v-model="title"
      >
    </div>
    <div class="input__wrapper">
      <div class="input__container">
        <span
          class="input__title"
        >
          Калории
        </span>
        <input
          type="text"
          class="input__input"
          v-model="cals"
        >
      </div>
      <div class="input__container">
        <span
          class="input__title"
        >
          Вес
        </span>
        <input
          type="text"
          class="input__input"
          v-model="weight"
        >
      </div>
    </div>
    <div class="input__container">
      <span
        class="input__title"
      >
        Изображение
      </span>
      <input
        type="text"
        class="input__input"
        v-model="image"
      >
    </div>
    <div class="input__container">
      <span
        class="input__title"
      >
        Стоимость
      </span>
      <input
        type="text"
        class="input__input"
        v-model="price"
      >
    </div>
    <div class="button__container">
      <button
        class="button__item button__item--back"
        @click="closeModal"
      >
        Назад
      </button>
      <button
        class="button__item"
        @click="setDish"
      >
        Сохранить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      required: true
    }
  },
  data () {
    return {
      activeCategory: this.categories[0],
      title: null,
      cals: null,
      weight: null,
      image: null,
      price: null
    }
  },
  methods: {
    changeCategory (index) {
      this.activeCategory = this.categories[index]
    },
    closeModal () {
      this.$emit('closeModal', false)
    },
    async setDish () {
      const data = {
        title: this.title,
        price: this.price,
        weight: this.weight,
        image: this.image,
        category: this.activeCategory.url
      }
      await this.$axios.post('http://localhost:3000/categories/dish', data)
        .then((result) => {
          console.log(result.data)
          this.closeModal()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .dish__container{
    padding: 28px 24px;
    padding-bottom: 16px;
    width: 488px;
  }
  .dish__title{
    font-size: 44px;
    line-height: 48px;
    font-weight: 800;
    color: $text-main;
  }
  .modal__date{
    overflow-x: scroll;
    position: relative;
    height: 40px;
    border-radius: 6px;
    margin-top: 18px;
    scrollbar-width: none;

    &::-webkit-scrollbar{
      width: 0;
    }

    @media screen and (max-width: 900px){
      display: none;
    }

    &--mobile{
      display: none;
      position: relative;

      @media screen and (max-width: 900px){
        display: block;
        padding: 0 16px;
      }
    }
  }

  .modal__date-list{
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    list-style: none;
    display: flex;
    width: auto;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    padding: 2px;
    margin: 0;
    height: auto;
    align-items: center;
    background-color: $background;
    scrollbar-width: none;

    &::-webkit-scrollbar{
      width: 0;
    }
  }

  .modal__date-item{
    min-width: 120px;
    text-align: center;
    font-weight: 400;
    color: $gray-400;
    display: block;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;

    & span{
      border-left: 1px solid $gray-200;
      padding: 0 21px;
    }

    &:first-child{

      & span{
        border-left: none;
      }
    }

    &--active{
      background-color: #fff;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      color: $black;
      font-weight: 600;

      & span{
        border-left: none;
      }

      & + .modal__date-item{

        & span{
          border-left: none;
        }
      }
    }
  }

  .input__container{
    margin-bottom: 20px;
  }

  .input__wrapper{
    display: flex;
    justify-content: space-between;

    & .input__container{
      width: 48%;
    }
  }

  .input__title{
    color: $text-main;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 5px;
  }

  .input__input{
    @include input;
    width: 100%;
  }

  .button__container{
    display: flex;
    justify-content: flex-end;
  }

  .button__item{
    @include button;
    font-size: 24px;
    line-height: 24px;
    padding: 18px 32px;
    margin-right: 12px;

    &--back{
      background-color: $background;
      color: $text-main;

      &:hover{
        background-color: $background;
        color: $primary-action;
      }
    }
  }
</style>
