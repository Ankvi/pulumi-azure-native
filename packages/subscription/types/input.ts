import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Put subscription additional properties.
 */
export interface PutAliasRequestAdditionalPropertiesArgs {
    /**
     * Management group Id for the subscription.
     */
    managementGroupId?: pulumi.Input<string>;
    /**
     * Owner Id of the subscription
     */
    subscriptionOwnerId?: pulumi.Input<string>;
    /**
     * Tenant Id of the subscription
     */
    subscriptionTenantId?: pulumi.Input<string>;
    /**
     * Tags for the subscription
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * Put subscription properties.
 */
export interface PutAliasRequestPropertiesArgs {
    /**
     * Put alias request additional properties.
     */
    additionalProperties?: pulumi.Input<PutAliasRequestAdditionalPropertiesArgs>;
    /**
     * Billing scope of the subscription.
     * For CustomerLed and FieldLed - /billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}
     * For PartnerLed - /billingAccounts/{billingAccountName}/customers/{customerName}
     * For Legacy EA - /billingAccounts/{billingAccountName}/enrollmentAccounts/{enrollmentAccountName}
     */
    billingScope?: pulumi.Input<string>;
    /**
     * The friendly name of the subscription.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Reseller Id
     */
    resellerId?: pulumi.Input<string>;
    /**
     * This parameter can be used to create alias for existing subscription Id
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * The workload type of the subscription. It can be either Production or DevTest.
     */
    workload?: pulumi.Input<string | enums.Workload>;
}


