<script setup lang="ts">
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css'
import { ref } from 'vue';
//const name = ref('Attilio Capocchiani');

const { name, jobTitle, company, country } = defineProps(['name', 'jobTitle', 'company', 'country'])

const compactInfo = ref([
  { label: 'Job Title', value: jobTitle },
  { label: 'Company', value: company },
  { label: 'Country', value: country },
])

</script>
<template>
    <div class="slds-page-header slds-page-header_record-home">
    <div class="slds-page-header__row">
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
                  <span>Person Account</span>
                  <span class="slds-page-header__title slds-truncate" :title="name">{{ name }}</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="slds-page-header__row slds-page-header__row_gutters">
      <div class="slds-page-header__col-details">
        <template v-if="compactInfo.length">
          <ul class="slds-page-header__detail-row">
            <li v-for="(item, index) in compactInfo" :key="index" class="slds-page-header__detail-block">
              <div class="slds-text-title slds-truncate" :title="item.label">{{ item.label }}</div>
              <div class="slds-truncate" :title="item.value">{{ item.value }}</div>
            </li>
          </ul>
        </template>
      </div>
    </div>
  </div>
</template>