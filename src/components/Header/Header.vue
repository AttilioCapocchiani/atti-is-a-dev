<script setup lang="ts">
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css'
import { ref } from 'vue';

const { name, jobTitle, company, country, email, lookingForJob } = defineProps(['name', 'jobTitle', 'company', 'country', 'email', 'lookingForJob'])

const compactInfo = ref([
  { label: 'Job Title', value: jobTitle, type: "text" },
  { label: 'Company', value: company, type: "text" },
  { label: 'Country', value: country, type: "text" },
  { label: 'Looking For Job?', value: lookingForJob, type: "checkbox"}
])

const openSendEmail = function() {
  window.open(`mailto:${email}`)
}

</script>
<template>
  <div class="slds-page-header slds-page-header_record-home">
    <div class="slds-page-header__row">
      <!-- Header -->
      <div class="slds-page-header__col-title">
        <div class="slds-media">
          <div class="slds-media__figure">
            <span class="slds-icon_container slds-icon-standard-employee">
              <svg class="slds-icon slds-page-header__icon" aria-hidden="true">
                <use xlink:href="../../assets/icons/standard-sprite/svg/symbols.svg#employee"></use>
              </svg>
            </span>
          </div>
          <div class="slds-media__body">
            <div class="slds-page-header__name">
              <div class="slds-page-header__name-title">
                <h1>
                  <span>Person</span>
                  <span class="slds-page-header__title slds-truncate" :title="name">{{ name }}</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="slds-page-header__col-actions">
        <div class="slds-page-header__control">
          <ul class="slds-button-group-list">
            <li>
              <button class="slds-button slds-button_neutral" @click="openSendEmail">Email</button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Compact Layout -->
    <div class="slds-page-header__row slds-page-header__row_gutters">
      <div class="slds-page-header__col-details">
        <template v-if="compactInfo.length">
          <ul class="slds-page-header__detail-row">
            <li v-for="(item, index) in compactInfo" :key="index" class="slds-page-header__detail-block">
              <div class="slds-text-title slds-truncate" :title="item.label">{{ item.label }}</div>
              <div class="slds-truncate" :title="item.value" v-if="item.type === 'text'">{{ item.value }}</div>
              <div class="slds-truncate" v-else-if="item.type === 'checkbox'">
                <span class="slds-icon_container slds-icon-utility-check slds-current-color" title="True">
                  <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                    <use xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#check" v-if="item.value"></use>
                    <use xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#steps" v-else></use>
                  </svg>
                  <span class="slds-assistive-text">True</span>
                </span>
              </div>
            </li>
          </ul>
        </template>
      </div>
    </div>
  </div>
</template>