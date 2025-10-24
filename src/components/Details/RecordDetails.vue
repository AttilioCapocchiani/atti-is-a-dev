<script setup lang="ts">
import { ref } from 'vue'
const { data, links } = defineProps(['data'])

const isInfoSectionOpen = ref<boolean>(true)
const isLinkSectionOpen = ref<boolean>(true)

const toggleInfoOpen = function () {
    isInfoSectionOpen.value = !isInfoSectionOpen.value
}

const toggleLinkOpen = function () {
    isLinkSectionOpen.value = !isLinkSectionOpen.value
}


</script>
<template>
    <div class="slds-form" role="list">
        <div class="slds-section" :class="{'slds-is-open' : isInfoSectionOpen}">
            <h3 class="slds-section__title">
                <button aria-controls="information" :aria-expanded="isInfoSectionOpen" class="slds-button slds-section__title-action" @click="toggleInfoOpen">
                    <svg class="slds-section__title-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
                        <use xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
                    </svg>
                    <span class="slds-truncate" title="Information">Information</span>
                </button>
            </h3>

            <div class="slds-form__row slds-section__content slds-p-around--small" id="information">
                <div class="slds-form__item" role="listitem">
                    <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent">
                        <span class="slds-form-element__label">First Name</span>
                        <div class="slds-form-element__control">
                            <div class="slds-form-element__static">
                                {{ data.firstName }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slds-form__item" role="listitem">
                    <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent">
                        <span class="slds-form-element__label">Last Name</span>
                        <div class="slds-form-element__control">
                            <div class="slds-form-element__static">
                                {{ data.lastName }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slds-form__item"  role="listitem">
                    <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent">
                        <span class="slds-form-element__label">Education</span>
                        <div class="slds-form-element__control">
                            <div class="slds-form-element__static">
                                {{data.education}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slds-form__item" role="listitem">
                    <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent">
                        <span class="slds-form-element__label">Description</span>
                        <div class="slds-form-element__control">
                            <div class="slds-form-element__static">
                                {{data.description}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="slds-section slds-m-top--medium" :class="{'slds-is-open' : isLinkSectionOpen}">
            <h3 class="slds-section__title">
                <button aria-controls="links" aria-expanded="true" class="slds-button slds-section__title-action" @click="toggleLinkOpen">
                    <svg class="slds-section__title-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
                        <use xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
                    </svg>
                    <span class="slds-truncate" title="Links">Links</span>
                </button>
            </h3>


        <div class="slds-form__row slds-section__content slds-p-around--small" id="links">
            <div class="slds-form__item" role="listitem">
                <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent">
                    <span class="slds-form-element__label">LinkedIn</span>
                    <div class="slds-form-element__control">
                        <div class="slds-form-element__static">
                            <a v-bind:href="`${data.links.linkedin}`">{{ data.links.linkedIn}}</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="slds-form__item" role="listitem">
                <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent">
                    <span class="slds-form-element__label">Trailhead</span>
                    <div class="slds-form-element__control">
                        <div class="slds-form-element__static">
                            <a :href="data.links.trailhead">{{ data.links.trailhead}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</div>
</template>