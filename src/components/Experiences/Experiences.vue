<script setup lang="ts">
    import { ref } from 'vue';
    import ExperienceTree from './ExperienceTree.vue';

    import type { Experience } from '../../models';

    const experiences = ref<Experience[]>([
        {
            role: 'Senior Consultant',
            company: 'Deloitte Digital',
            period: '2017 - Present',
            description: 
                `Applying standard and custom solutions for various customers in different industries (Automotive, Energy, Banking)
                Leading teams for the development of complex solutions.
                Pre-sales activities for new potential customers.`,
            expanded: false,
            details: [
        {
            client: "Automotive Client",
            expanded: true,
            details: [
                {
                    role: "Solution Lead – Tech Advisor",
                    expanded: false,
                    content: [
                        "Solution design to satisfy business requirements using best practices",
                        "Cross-country Development team management",
                        "End-to-end solution design",
                        "Training sessions to final users of the platform",
                        "Support in pre-sales",
                        "Build POC (incl. Agentforce)"
                    ]
                },
                {
                    role: "Tech Lead – Developer",
                    expanded: false,
                    content: [
                        "Technical solution design to satisfy business requirements using best practices",
                        "Cross-country Development team management",
                        "Code review",
                        "Release management",
                        "Solution presentation to the customer",
                        "Agile management of deploys for sprints"
                    ]
                }
            ]      
        }
    ]
        },
        {
            role: 'Java Developer',
            company: 'Advancia Technology',
            period: '2015 - 2017',
            description: 'Collaborated within a development team to maintain and implement minor enhancements for an application enabling bank employees to efficiently manage automotive and real estate leasing processes, ensuring system reliability and continuous improvement.',
            expanded: false,
            details: []
        }
    ])

    const toggleOpen = function (index: number) {
        experiences.value[index]!.expanded = !experiences.value[index]!.expanded
    }
</script>

<template>
    <div class="slds-box slds-theme_default">
        <ul class="slds-timeline">
            <li v-for="(experience, index) in experiences" :key="index">
                <div class="slds-timeline__item_expandable slds-timeline__item_task" :class="{ 'slds-is-open': experience.expanded }">
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
                                    <span>{{ line }}</span><br />
                                </template>
                            </p>
                            <article
                                class="slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small"
                                id="task-item-base-65">
                                
                                <ExperienceTree :experiences="experience.details" />
                            </article>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>