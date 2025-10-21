<script setup lang="ts">
const { data } = defineProps(['data'])
</script>
<template>
    <div class="slds-form" role="list">
        <div class="slds-form__row">
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

        </div>
        <div class="slds-form__row slds-m-top--small">
            <div class="slds-form__item" role="listitem">
                <div class="slds-form-element slds-form-element_edit slds-form-element_readonly slds-form-element_stacked slds-hint-parent">
                    <span class="slds-form-element__label">Education</span>
                    <div class="slds-form-element__control">
                        <div class="slds-form-element__static">
                            {{data.education}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="slds-form__row slds-m-top--small">
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
</template>