Vue.component(`carList`, {
  template: `
    <ul>
        <li>BMW is Car</li>
    </ul>
    `,
});

const app = new Vue({
  el: "#app",
  data: {
    newCar: "",
    cars: [
      { name: `BMW` },
      { name: `Ford` },
      { name: `Mercedes` },
      { name: `Kia` },
    ],
  },
  methods: {
    insertCar: function () {
      this.cars.push({ name: this.newCar });
      this.newCar = "";
    },
  },
  filters: {
    captalize: function (value) {
      return value.toUpperCase();
    },

    myCar: function (value) {
      return `My car is: ` + value;
    },
  },
  computed: {
    carName: function () {
      if (this.newCar.length > 2) {
        return "my car is : " + this.newCar;
      }
    },
  },
});
