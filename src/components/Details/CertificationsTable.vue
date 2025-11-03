<script setup lang="ts">
import type { Certification} from "../../models.js";

const props = defineProps(['certifications'])
const certifications : Certification[] = props.certifications

</script>
<template>
    <article class="slds-card">
        <div class="slds-page-header">
            <div class="slds-page-header__row">
                <div class="slds-page-header__col-title">
                    <div class="slds-media">
                        <div class="slds-media__figure">
                            <span class="slds-icon_container slds-icon-standard-trailhead">
                                <svg class="slds-icon slds-page-header__icon" aria-hidden="true">
                                    <use xlink:href="../../assets/icons/standard-sprite/svg/symbols.svg#trailhead"></use>
                                </svg>
                            </span>
                        </div>
                        <div class="slds-media__body">
                            <div class="slds-page-header__name">
                                <div class="slds-page-header__name-title">
                                    <h1>
                                        <span>Certifications</span>
                                        <span class="slds-page-header__title slds-truncate" title="All Certifications">All Certifications</span>
                                    </h1>
                                </div>
                                <div class="slds-page-header__name-switcher slds-is-relative">
                                    <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
                                        <button class="slds-button slds-button_icon slds-button_icon-small" aria-haspopup="true" title="Switch list view">
                                            <svg class="slds-button__icon slds-icon_x-small" aria-hidden="true">
                                                <use xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                            </svg>
                                            <span class="slds-assistive-text">Switch list view</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slds-page-header__row">
                <div class="slds-page-header__col-meta">
                    <p class="slds-page-header__meta-text"> {{certifications.length}} items • Updated 1 month ago</p>
                </div>
            </div>
        </div>
    </article>
    <table class="slds-table slds-table_cell-buffer slds-table_bordered"
           aria-label="Example default base table of Opportunities">
        <thead>
            <tr class="slds-line-height_reset">
                <th class="" scope="col">
                    <div class="slds-truncate" title="Certification Name">Certification Name</div>
                </th>
                <th class="" scope="col">
                    <div class="slds-truncate" title="Issuer">Issuer</div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="slds-hint-parent" v-for="certification in certifications" :key="certification.name">
                <th data-label="Certification Name" scope="row">
                    <div class="slds-truncate" :title="certification.name">
                        <a class="slds-text-link" tabindex="-1">{{ certification.name }}</a>
                    </div>
                </th>
                <td data-label="Issuer">
                    <div class="slds-truncate" :title="certification.issuer">{{ certification.issuer }}</div>
                </td>
            </tr>
    </tbody>
    </table>
</template>