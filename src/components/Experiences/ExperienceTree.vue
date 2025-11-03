<script setup lang="ts">
import { defineProps } from 'vue';
const { experiences } = defineProps(['experiences'])
</script>

<template>
    <div class="slds-tree_container">
        <ul aria-labelledby="treeheading" class="slds-tree" role="tree">
            <li :aria-expanded="experience.expanded" aria-label="Tree Branch" aria-level="1" role="treeitem" v-for="(experience, index) in experiences" :key="index">
                <div class="slds-tree__item">
                    <button class="slds-button slds-button_icon slds-m-right_x-small" aria-hidden="true" tabindex="-1"
                        title="Expand Tree Branch" @click="experience.expanded = !experience.expanded">
                        <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
                            <use xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
                        </svg>
                        <span class="slds-assistive-text">Expand Tree Branch</span>
                    </button>
                    <span class="slds-has-flexi-truncate">
                        <span class="slds-tree__item-label" :title="experience.client">
                            <div class="slds-text-title_caps"><strong>{{ experience.client }}</strong></div>
                        </span>
                    </span>
                </div>
                <ul role="group">
                    <template v-for="detail in experience.details" :key="detail.role">
                        <li :aria-expanded="detail.expanded" aria-label="Tree Branch" aria-level="2" role="treeitem">
                            <div class="slds-tree__item">
                                <button class="slds-button slds-button_icon slds-m-right_x-small" aria-hidden="true" tabindex="-1" title="Expand Tree Branch" @click="detail.expanded = !detail.expanded">
                                    <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
                                        <use xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
                                    </svg>
                                    <span class="slds-assistive-text">Expand Tree Branch</span>
                                </button>
                                <span class="slds-has-flexi-truncate">
                                    <span class="slds-tree__item-label" :title="detail.role">
                                        <strong>{{ detail.role }}</strong>
                                    </span>
                                </span>
                            </div>
                            <ul role="group">
                                <template v-for="contentItem in detail.content" :key="contentItem">
                                    <li aria-level="3" role="treeitem">
                                        <div class="slds-tree__item">
                                            <button class="slds-button slds-button_icon slds-m-right_x-small slds-hidden" aria-hidden="true" tabindex="-1" title="Expand Tree Item">
                                                <svg class="slds-button__icon slds-button__icon_small" aria-hidden="true">
                                                    <use xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#chevronright"></use>
                                                </svg>
                                                <span class="slds-assistive-text">Expand Tree Item</span>
                                            </button>
                                            <span class="slds-has-flexi-truncate">
                                                <span class="slds-tree__item-label" :title="contentItem">{{ contentItem }}</span>
                                            </span>
                                        </div>
                                    </li>
                                </template>
                            </ul>
                        </li>
                    </template>
                </ul>
            </li>
        </ul>
    </div>

</template>