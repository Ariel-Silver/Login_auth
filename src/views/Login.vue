<template>
  <div id="login">
    <b-container>
      <h1>Login</h1>
      <b-card>
        <b-form @submit.prevent="submitForm" :model="formLabelAlign">
          <b-form-group label="Email:" label-for="email">
            <b-form-input
              class="colorInput"
              id="email"
              type="email"
              placeholder="Ingrese Correo Electrónico"
              required
              v-model="formLabelAlign.user"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Password" label-for="password">
            <b-form-input
              class="colorInput"
              id="password"
              type="password"
              placeholder="Ingrese Contraseña"
              required
              v-model="formLabelAlign.password"
            ></b-form-input>
          </b-form-group>
          <b-button
            @click="login"
            type="submit"
            variant="dark"
            >Ingresar</b-button>
        </b-form>
      </b-card>
      <h6 class="mt-5">
        Los datos para ingresar son:<br />Correo: desafio@gmail.com<br />Clave:
        123456
      </h6>
    </b-container>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      formLabelAlign: {
        user: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      const auth = getAuth();
      const {
        formLabelAlign: { user: email, password },
      } = this;

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          this.$router.push("/home");
        })
        .catch((error) => {
          console.log(error.code);
          this.$message({
            showClose: true,
            message: "Error en Email y/o Password",
            type: "error",
          });
        });
    },
  },
};
</script>

<style scoped>
#login {
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