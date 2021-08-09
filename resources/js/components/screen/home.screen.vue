<template>
  <div class="auth">
    <div class="cols">
      <h2>
        <span>Hi, Welcome back</span>
      </h2>
      <img
        src="https://minimals.cc/static/illustrations/illustration_login.png"
        alt=""
      />
    </div>
    <div class="cols">
      <form action="">
        <div class="headers">
          <h4>PT Four best synergy</h4>
          <h6>Enter your details below</h6>
        </div>
        <div class="field">
          <label for="">Username</label>
          <div id="field-input">
            <input
              type="text"
              name="username"
              id="username"
              class="username"
              placeholder="Username"
              v-model="username"
              required
              :readonly="defaults.message.loading"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="field">
          <label for="">Password</label>
          <div id="field-input">
            <input
              type="text"
              name="password"
              id="password"
              class="username"
              placeholder="Password"
              v-model="password"
              required
              :readonly="defaults.message.loading"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="field">
          <div id="field-button">
            <button :id="defaults.message.loading ? 'loading' : ''">
              <span>Log in</span>
              <div class="spin"></div>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
@Component({
  computed: {
    ...mapGetters(['defaults']),
  },
})
export default class HomeScreen extends Vue {
  username = '';
  password = '';
  submit() {}

  mounted() {
    document.body.style.backgroundColor = 'white';
  }
}
</script>
