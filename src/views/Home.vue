<template>
  <div class="home">
    <b-container>
      <b-card>
        <h1>Te has logeado con éxito</h1>
        <b-button
         @click="logout" 
         type="submit"
         variant="dark"
         >Deslogear</b-button>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.$router.push("login");
        })
        .catch((error) => {
          this.$message({
            showClose: true,
            message: error.message,
            type: "error",
          });
        });
    },
  },
};
</script>

<style scoped>
.home {
  margin-top: 30px;
}

.card {
background: gray;
box-shadow: black;
backdrop-filter: blur( 20px );
-webkit-backdrop-filter: blur( 20px );
border-radius: 10px;
border: 1px solid gray
}

</style>