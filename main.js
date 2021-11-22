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
  },
});
