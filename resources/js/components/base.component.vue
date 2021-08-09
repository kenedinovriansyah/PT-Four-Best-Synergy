<template>
  <div>
    <router-view></router-view>
    <message />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import message from './context/message.context.vue';

@Component({
  components: {
    message,
  },
})
export default class BaseComponent extends Vue {}
</script>
