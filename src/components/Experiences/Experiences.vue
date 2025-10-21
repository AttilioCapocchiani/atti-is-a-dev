<script setup lang="ts">
import { ref } from 'vue';
import ExperienceTree from './ExperienceTree.vue';

import type { Experience } from '../../models';

const props = defineProps(['experiences'])
const experiences = ref<Array<Experience>> (props.experiences)

const toggleOpen = function(index: number) {
    experiences.value[index]!.expanded = !experiences.value[index]!.expanded
}
</script>

<template>
    <div class="slds-box slds-theme_default">
        <ul class="slds-timeline">
            <li v-for="(experience, index) in experiences" :key="index">
                <div class="slds-timeline__item_expandable slds-timeline__item_email" :class=" { 'slds-is-open': experience.expanded }">
                    <span class="slds-assistive-text">task</span>
                    <div class="slds-media">
                        <div class="slds-media__figure">
                            <button class="slds-button slds-button_icon"
                                    title="Toggle details for Review proposals for EBC deck with larger team and have marketing review this"
                                    aria-controls="task-item-base-65"
                                    @click="toggleOpen(index)">
                                <svg class="slds-button__icon slds-timeline__details-action-icon" aria-hidden="true">
                                    <use xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
                                </svg>
                                <span class="slds-assistive-text">Toggle details for {{ experience.role }}</span>
                            </button>
                            <div class="slds-icon_container slds-icon-standard-account slds-timeline__icon" title="task">
                                <svg class="slds-icon slds-icon_small" aria-hidden="true">
                                    <use xlink:href="../../assets/icons/standard-sprite/svg/symbols.svg#job_position"></use>
                                </svg>
                            </div>
                        </div>
                        <div class="slds-media__body">
                            <div class="slds-grid slds-grid_align-spread slds-timeline__trigger">
                                <div
                                    class="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
                                    <h3 class="slds-truncate"
                                        :title="experience.role + ' | ' + experience.company">
                                        <a href="#">
                                            <strong>{{ experience.role }}</strong> at <strong>{{ experience.company }}</strong>
                                        </a>
                                    </h3>
                                </div>
                                <div class="slds-timeline__actions slds-timeline__actions_inline">
                                    <p class="slds-timeline__date">{{ experience.period }}</p>

                                </div>
                            </div>
                            <p class="slds-m-horizontal_xx-small">
                                <template v-for="line in experience.description.split('\n')">
                                    <span>{{ line }}</span><br/>
                                </template>
                            </p>
                            <article
                                class="slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small"
                                id="task-item-base-65">

                                <ExperienceTree :experiences="experience.details"/>
                            </article>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>