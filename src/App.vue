<script setup lang="ts">
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css'
import Header from './components/Header/Header.vue';
import Details from './components/Details/Details.vue';
import Experiences from './components/Experiences/Experiences.vue';

</script>

<template>
  <div class="slds-m-around--medium">
    <Header />
    <div class="slds-grid slds-gutters slds-m-top--medium">
      <div class="slds-col slds-size--9-of-12">
        <Details />
      </div>
      <div class="slds-col slds-size--3-of-12">
        <experiences />
      </div>
    </div>
  </div>
  </template>

<style scoped></style>