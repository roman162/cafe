
  export const state = () => ({
    order: [],
    menu: [
      {
        title: "Борщ",
        image: null,
        price: 50,
        weight: 500,
        category: "soup",
        active: true
      },
      {
        title: "Борщ",
        image: null,
        price: 50,
        weight: 500,
        category: "soup",
        active: true
      },
      {
        title: "Борщ",
        image: null,
        price: 50,
        weight: 500,
        category: "soup",
        active: true
      },
      {
        title: "Борщ",
        image: null,
        price: 50,
        weight: 500,
        category: "soup",
        active: true
      },
      {
        title: "Борщ",
        image: null,
        price: 50,
        weight: 500,
        category: "soup",
        active: true
      },
      {
        title: "Борщ",
        image: null,
        price: 50,
        weight: 500,
        category: "soup",
        active: true
      }
    ]
  })

  export const getters = {
    GET_ORDER: state => state.order,
    GET_MENU: state => state.menu
  }

  export const mutations = {
    PUSH_DISH (state, dish) {
      state.order.push(dish)
    }
  }