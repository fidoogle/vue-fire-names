<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Real-time DB Updates</h1>
        <h4>View this on two different browsers or computers at the same time.</h4>
        <hr>
        <p>Enter some data:</p>
        <div class="form-group">
          <label>Username: </label>
          <input class="form-control" type="text" v-model="user.username">
        </div>
        <div class="form-group">
          <label>eMail: </label>
          <input class="form-control" type="text" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr>
        <p>Current data:</p>
        <ul class="list-group">
          <li class="list-group-list-item" :key="u.username" v-for="u in users">
            {{ `${u.username}  -  ${u.email}` }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: []
    };
  },
  methods: {
    submit() {
      this.$http
        .post("https://vuefire1-2f9ff.firebaseio.com/data.json", this.user)
        .then(
          response => {
            console.log(response);
            this.fetchData();
          },
          error => {
            console.log(error);
          }
        );
    },
    fetchData() {
      this.$http
        .get("https://vuefire1-2f9ff.firebaseio.com/data.json")
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;
          console.log("resultArray", resultArray);
        });
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style>

</style>
