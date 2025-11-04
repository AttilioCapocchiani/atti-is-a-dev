<script setup lang="ts">
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css'
import Header from './components/Header/Header.vue';
import Details from './components/Details/Details.vue';
import Experiences from './components/Experiences/Experiences.vue';
import { atti } from './data.ts'
</script>

<template>
  <div class="slds-p-around--medium">
    <Header
      :name="atti.firstName + ' ' + atti.lastName"
      :job-title="atti.jobTitle"
      :company="atti.company"
      :country="atti.country"
      :email="atti.email"
      :looking-for-job="atti.lookingForJob"
    />

    <div class="slds-grid slds-wrap slds-p-top--medium">
      <div class="slds-col slds-small-size--1-of-1 slds-medium-size--1-of-1 slds-large-size--8-of-12">
        <Details
          :atti="atti"
          :certifications="atti.certifications"/>
      </div>
      <div class="slds-col slds-small-size--1-of-1 slds-medium-size--1-of-1 slds-large-size--4-of-12 responsive-margin">
        <experiences :experiences="atti.jobHistory"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

.responsive-margin {
  padding-top: 1rem;
}

@media (min-width: 48em) {
  .responsive-margin {
    padding-top: 0;
    padding-left: 1rem;
  }
}
</style>