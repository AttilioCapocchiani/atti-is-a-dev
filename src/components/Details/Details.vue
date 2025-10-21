<script setup lang="ts">
import CertificationsTable from "./CertificationsTable.vue";

const { certifications } = defineProps(['certifications'])
console.table(certifications)

</script>

<template>
    <div class="slds-box slds-theme_default">
        <div class="slds-tabs_default">
            <ul class="slds-tabs_default__nav" role="tablist">
                <li class="slds-tabs_default__item slds-is-active" title="Related" role="presentation">
                    <a class="slds-tabs_default__link" href="#" role="tab" tabindex="0" aria-selected="true"
                        aria-controls="tab-default-1" id="tab-default-1__item">Related</a>
                </li>
            </ul>
            <div id="tab-default-1" class="slds-tabs_default__content slds-show" role="tabpanel"
                aria-labelledby="tab-default-1__item">
                <certifications-table :certifications="certifications" />
            </div>
        </div>
    </div>
</template>