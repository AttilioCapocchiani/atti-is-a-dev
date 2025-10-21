<script setup lang="ts">
import CertificationsTable from "./CertificationsTable.vue";
import RecordDetails from "./RecordDetails.vue";
import {ref} from "vue";

const { atti } = defineProps(['atti'])
console.log('atti', atti)

const selectedTab = ref(0)

const setActiveTab = function(tab: number) {
    selectedTab.value = tab
}

</script>

<template>
    <div class="slds-box slds-theme_default">
        <div class="slds-tabs_default">
            <ul class="slds-tabs_default__nav" role="tablist">
                <li class="slds-tabs_default__item" :class="{'slds-is-active' : selectedTab === 0}" title="Related" role="presentation">
                    <a class="slds-tabs_default__link" role="tab" tabindex="0" :aria-selected="selectedTab === 0" aria-controls="tab-default-1" id="tab-default-1__item" @click="setActiveTab(0)">Details</a>
                </li>
                <li class="slds-tabs_default__item" :class="{'slds-is-active' : selectedTab === 1}" title="Related" role="presentation">
                    <a class="slds-tabs_default__link" role="tab" tabindex="1" :aria-selected="selectedTab === 1" aria-controls="tab-default-2" id="tab-default-2__item"@click="setActiveTab(1)">Related</a>
                </li>
            </ul>
            <div id="tab-default-1" class="slds-tabs_default__content" :class="selectedTab === 0 ? 'slds-show' : 'slds-hide'" role="tabpanel" aria-labelledby="tab-default-1__item">
                <record-details :data="atti" />
            </div>
            <div id="tab-default-2" class="slds-tabs_default__content" :class="selectedTab === 1 ? 'slds-show' : 'slds-hide'" role="tabpanel" aria-labelledby="tab-default-2__item">
                 <certifications-table :certifications="atti.certifications" />
             </div>
        </div>
    </div>
</template>