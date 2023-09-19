import * as pulumi from "@pulumi/pulumi";
    /**
     * Details of the Azure plan.
     */
    export interface AzurePlanResponse {
        /**
         * The sku description.
         */
        skuDescription: string;
        /**
         * The sku id.
         */
        skuId?: string;
    }

    /**
     * Invoice section properties with create subscription permission.
     */
    export interface InvoiceSectionWithCreateSubPermissionResponse {
        /**
         * The name of the billing profile for the invoice section.
         */
        billingProfileDisplayName: string;
        /**
         * The ID of the billing profile for the invoice section.
         */
        billingProfileId: string;
        /**
         * The billing profile spending limit.
         */
        billingProfileSpendingLimit: string;
        /**
         * The status of the billing profile.
         */
        billingProfileStatus: string;
        /**
         * Reason for the specified billing profile status.
         */
        billingProfileStatusReasonCode: string;
        /**
         * The system generated unique identifier for a billing profile.
         */
        billingProfileSystemId: string;
        /**
         * Enabled azure plans for the associated billing profile.
         */
        enabledAzurePlans?: AzurePlanResponse[];
        /**
         * The name of the invoice section.
         */
        invoiceSectionDisplayName: string;
        /**
         * The ID of the invoice section.
         */
        invoiceSectionId: string;
        /**
         * The system generated unique identifier for an invoice section.
         */
        invoiceSectionSystemId: string;
    }
