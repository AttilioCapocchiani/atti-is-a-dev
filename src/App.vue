<script setup lang="ts">
  import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css'
  import Header from './components/Header/Header.vue';
  import Details from './components/Details/Details.vue';
  import Experiences from './components/Experiences/Experiences.vue';
  import { atti } from './data.ts'
</script>

<template>
  <div class="slds-m-around--medium">
    <Header
      :name="atti.firstName + ' ' + atti.lastName"
      :job-title="atti.jobTitle"
      :company="atti.company"
      :country="atti.country"
    />
    <div class="slds-grid slds-m-top--medium">
      <div class="slds-col slds-size--8-of-12 slds-m-right--x-small">
        <Details
          :atti="atti"
          :certifications="atti.certifications" />
      </div>
      <div class="slds-col slds-size--4-of-12">
        <experiences :experiences="atti.jobHistory" />
      </div>
    </div>
  </div>
  </template>

<style scoped></style>