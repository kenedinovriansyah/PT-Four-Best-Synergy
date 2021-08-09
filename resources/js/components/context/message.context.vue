<template>
  <div
    :class="
      defaults.message.valid === 1
        ? 'message'
        : defaults.message.valid === 2
        ? 'message-close'
        : 'hidden'
    "
  >
    <div class="message-exit">
      <button>
        <icons :src="minus" class="icons" />
      </button>
    </div>
    <div class="message-body">
      <span>{defaults.message.message}</span>
    </div>
    <div class="message-type">
      <div class="box">
        <icons :src="defaults.message.color ? check : close" class="icons" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import check from '../icons/check.svg';
import close from '../icons/close.svg';
import minus from '../icons/minus.svg';
import './static/message.scss';

@Component({
  computed: {
    ...mapGetters(['defaults']),
  },
})
export default class MessageContext extends Vue {
  // icons
  check = check;
  close = close;
  minus = minus;
}
</script>
