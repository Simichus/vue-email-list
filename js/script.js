Vue.config.devtools = true;

const app = new Vue({
  el: "#app",
  data: {
    emails: [],
    nOfEmails: 10,
    isError: false,
  },
  methods: {
    getEmails() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((res) => {
          this.emails.push(res.data.response);
        })
        .catch((error) => {
          this.isError = true;
        });
    },
  },
  created() {
    for (let i = 0; i < this.nOfEmails; i++) {
      this.getEmails();
    }
  },
});
