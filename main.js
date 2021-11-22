Vue.component("persons", {
  props: [`persons`],
  template: `
  <ul>
    <li v-for="person in persons"> {{person.fname}} {{person.lName}}</li>
  </ul>`,
});

const todoVueJs = new Vue({
  el: "#app",
  data: {
    newFristName: "",
    newLastName: "",
    newPerson: {},
    persons: [
      { fname: `Abolfazl`, lName: `Saeidabadi` },
      { fname: `ali`, lName: `Mehrabi` },
      { fname: `Reza`, lName: `Rezaei` },
      { fname: `Amir`, lName: `Farhadi` },
    ],
  },
  methods: {
    insertNewPerson: function () {
      this.persons.push({ fname: this.newFristName, lName: this.newLastName });
      this.newFristName = "";
      this.newLastName = "";
    },
  },
});
